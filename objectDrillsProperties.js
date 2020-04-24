arr = [
    {name: 'orkun', jobTitle:'big bitch', boss:'lemonte'},
    {name: 'clement', jobTitle:'main bitch'},
    {name: 'vepa', jobTitle:'lil bitch', boss:'lemonte'}
]

for(y in arr) {
    if(arr[y].boss === undefined) {
        console.log(`${arr[y].jobTitle} ${arr[y].name} doesn't report to anybody.`)
    }
    else { 
        console.log(`${arr[y].jobTitle} ${arr[y].name} reports to ${arr[y].boss}.`)
    }
}