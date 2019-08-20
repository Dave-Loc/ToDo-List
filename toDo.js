

function myFunction(){
    
    
    let newText = document.getElementById('text').value;
        
    
    
    
    
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.className='list-group-item';
    
    if(newText != ""){
    li.appendChild(document.createTextNode(newText.toUpperCase()));
    ul.appendChild(li);

    let but = document.createElement('button');
    but.className = 'but btn btn-sm  check fas fa-check';

    li.appendChild(but);

    but.addEventListener('click',remove);
    }
    


function remove(e){
    
  if(e.target.classList.contains('check')){
        if(confirm('Are you sure')){
            let li = e.target.parentElement;
            ul.removeChild(li);
            }
        }
    }
}
