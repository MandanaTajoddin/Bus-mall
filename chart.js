//Get our canvas by Id
let elCanvas = document.getElementById('myChart').getContext('2d');

//define a function that populates the data for my chart by looping through my image array

function populateData(prop) {

    //create a variable that will be an empty array that will store and return my prop values

    let propertyArray = [];

    //loop through 

    for(let i= 0;i < babyImageArray.length; i++) {

        propertyArray.push(babyImageArray[i][prop]);

    }

    return propertyArray;

}

function displayChart(){

    elCanvas.innerHTML = '';

    let elChart = new Chart(elCanvas, { 
        type : "bar",
        data : {
            labels : populateData('name'),
            datasets : [
                {
                   label : 'Nuber of times clicked',
                   data : populateData('clicked'),
                   backgroundColor : 'gray',                                           
               
               },

               {
                label : 'Number of times shown',
                data : populateData('shown'),
                backgroundColor : 'pink',                                           
            
            },
        ]
        },
        options: {
    
            scales: {
    
                  yAxe: [{
                      ticks: {
    
                      beginAtZero: true,
                      }
                  }]
            }
        }
    
    })

}




