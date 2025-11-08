#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>

int main()
{
    int fd_secchia, fd_panaro;
    int num1, num2, livello;

    // apre le pipe con nome in sola lettura e non bloccante
    // O_NONBLOCK fa sì che read() non resti bloccata se non c’è nulla
    fd_secchia = open("secchia", O_RDONLY | O_NONBLOCK);
    fd_panaro = open("panaro", O_RDONLY | O_NONBLOCK);

    if (fd_secchia < 0 || fd_panaro < 0)
    {
        perror("open fallita");
        exit(1);
    }

    // ciclo infinito che simula il controllo del livello del fiume
    while (1)
    {
        num1 = num2 = 0;

        // prova a leggere un numero intero da ciascuna pipe
        read(fd_secchia, &num1, sizeof(int));
        read(fd_panaro, &num2, sizeof(int));

        // calcola il livello combinato
        livello = num1 + num2 - 5;

        printf("Il livello del po è %d\n", livello);
        fflush(stdout);

        // se il livello supera 60, termina
        if (livello > 60)
        {
            printf("Il po è straripato!\n");
            break;
        }

        // attende un secondo prima della prossima lettura
        sleep(1);
    }

    close(fd_secchia);
    close(fd_panaro);
    return 0;
}
