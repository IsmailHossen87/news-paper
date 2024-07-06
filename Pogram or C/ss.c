#include<stdio.h>
#include<conio.h>
#include<math.h>
void main (){
    int i;
    int sum=0;
    for (i = 1; i < 30; i=i+2){
        sum = sum+i;
        printf("%d\n",i);
    }

    return 0;
}
// #include <stdio.h>
// #include <math.h>

// int main() {
//     int i;
//     int sum = 0;
//     for (i = 1; i < 35; i = i + 2) {
//         sum = sum + i;
//         printf("%d\n", i);
//     }

//     printf("Sum of odd numbers less than 35: %d\n", sum);
//     return 0;
// }
