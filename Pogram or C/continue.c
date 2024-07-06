#include<stdio.h>
int main()
{
    int i;
    for(i=0;i<=24;i++)
    {
        if(i==13)
        {
            break;
        }
        printf("%d\n",i);
    }
    return 0;
}