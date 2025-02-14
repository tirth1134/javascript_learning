let count=0;
function increaseCount()
{
    count++;
    displayCount();
    checkCountValue();
}
function displayCount()
{
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue()
{
    if(count==10)
    {
        alert("You Gained 10 followers in Instagram. Congratulations..!!");
    }
    else if(count==20)
    {
        alert("You Gained 20 follwers in Instagram. Keep It Up👍");
    }
}
function resetCount()
{
    count=0;
    displayCount();
    alert("Count has been reset to 0");
}