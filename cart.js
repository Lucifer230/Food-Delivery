console.log("running")
var addItemId = 0;

function addcart(item){
    addItemId+=1;
    
    var r = item.children[0].currentSrc;
    console.log(r)
    sessionStorage.setItem('Img',r)
    
    // var img = document.createElement('img');
    // img.setAttribute('src',r);
    // var selectedItem = document.createElement('div');
    // selectedItem.classList.add("cartImg");
    // selectedItem.setAttribute('id',addItemId);
    // selectedItem.append(img);
    // console.log(selectedItem);
}

<script>
            
            r = sessionStorage.getItem('Img');
            var img = document.createElement('img');
            img.setAttribute('src',r);
            document.getElementById('title').appendChild(img);
            sessionStorage.clear();
            
        </script>