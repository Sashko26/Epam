


function pascalTriangle(){
    var arr =[50];
    var i, j;
    var size=prompt('Введите размер',size);

 
    for(i = 1; i <= size ; i++)
    {
        arr[i] = 0;
    }
 
    arr[0] = 1;
    for(j = 1; j <= size; j++)
    {
        for(i = j; i >= 1 ; i--)
        {
         
            document.write (arr[i-1]);
            document.write(' ');
         
            arr[i] = arr[i-1] + arr[i];
        }
        document.write('<br/>');
 
    }
    for(i = 0; i <= size ; i++)
    {
        document.write (arr[i]);
    }
 
}
window.onload = function () {
    pascalTriangle();
}
