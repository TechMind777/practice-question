function x()
{
    for(var i=0;i<=5;i++)
    {
        setTimeout(()=>{
            console.log(i);
        },i*1000)
    }
    console.log("End log ");
}

x();

/**
 End log
 6
 6
 6
 6
 6
 6
 */

function x()
{
    for(let i=0;i<=5;i++)
    {
        setTimeout(()=>{
        console.log(i);
        },i*1000)
    }
    console.log("End log");
}

x();
/**
End log
 0
 1
 2
 3
 4
 5
 
 */
// --------------
function x()
{
    for(var i=0;i<=5;i++)
    {
    
        function hiii(i)
        {
            setTimeout(()=>{
                console.log(i);
            },i*100)
        }
        console.log("End log");
    
        hiii(i)
    }
}

x()
/* output
End log
End log
End log
End log
End log
End log
0
1
2
3
4
5
6

*/