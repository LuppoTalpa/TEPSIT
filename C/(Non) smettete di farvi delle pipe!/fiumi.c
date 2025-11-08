#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

#define MAX_LEN 100

int main()
{
    int padre_figlio[2];              // pipe per mandare i dati DAL padre AL figlio
    int figlio_padre[2];              // pipe per mandare i dati DAL figlio AL padre
    char buffer[MAX_LEN];             // buffer per leggere/scrivere frasi
    char risposta[MAX_LEN + 50];      // buffer per risposta del figlio
    char storiche[100][MAX_LEN + 50]; // memorizza tutte le risposte ricevute
    int count = 0;

    // crea le due pipe (ognuna con un estremo di lettura e uno di scrittura)
    pipe(padre_figlio);
    pipe(figlio_padre);

    // crea un processo figlio
    pid_t pid = fork();

    if (pid < 0)
    {
        perror("fork fallita");
        exit(1);
    }

    // ======================
    //     PROCESSO FIGLIO
    // ======================
    if (pid == 0)
    {
        // chiude gli estremi che non usa:
        close(padre_figlio[1]); // il figlio NON scrive in padre_figlio
        close(figlio_padre[0]); // il figlio NON legge da figlio_padre

        while (1)
        {
            // legge una frase dal padre
            int n = read(padre_figlio[0], buffer, MAX_LEN);
            if (n <= 0)
                break; // pipe chiusa → fine comunicazione

            buffer[n - 1] = '\0'; // rimuove l’eventuale '\n' finale

            // se il padre ha scritto "esci", il figlio si ferma
            if (strcmp(buffer, "esci") == 0)
                break;

            // prepara la risposta
            snprintf(risposta, sizeof(risposta),
                     "Caro padre, hai detto: %s", buffer);

            // invia la risposta al padre
            write(figlio_padre[1], risposta, strlen(risposta) + 1);
        }

        // chiude le pipe e termina
        close(padre_figlio[0]);
        close(figlio_padre[1]);
        exit(0);
    }

    // ======================
    //     PROCESSO PADRE
    // ======================
    else
    {
        // chiude gli estremi che non usa:
        close(padre_figlio[0]); // il padre NON legge da padre_figlio
        close(figlio_padre[1]); // il padre NON scrive in figlio_padre

        while (1)
        {
            printf("Scrivi una frase: ");
            fflush(stdout);

            // legge una riga da tastiera
            if (!fgets(buffer, MAX_LEN, stdin))
                break; // fine input

            // invia la frase al figlio
            write(padre_figlio[1], buffer, strlen(buffer) + 1);

            // se l’utente scrive "esci", il padre smette di chiedere frasi
            if (strncmp(buffer, "esci", 4) == 0)
                break;

            // riceve la risposta del figlio
            int n = read(figlio_padre[0], risposta, sizeof(risposta));
            if (n > 0)
            {
                risposta[n] = '\0';
                // salva la risposta in memoria
                strcpy(storiche[count++], risposta);
            }
        }

        // aspetta che il figlio finisca
        wait(NULL);

        // chiude le pipe
        close(padre_figlio[1]);
        close(figlio_padre[0]);

        // stampa tutte le risposte ricevute
        printf("\nFrasi ricevute dal figlio:\n");
        for (int i = 0; i < count; i++)
            printf("%s\n", storiche[i]);
    }

    return 0;
}
