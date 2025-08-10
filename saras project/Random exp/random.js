const list_items= document.querySelectorAll('.list-item');
const list= document.querySelectorAll('.list');

let draggedItem = null;

for(let i =0; i,list_item.length;i++){
  const item=list_item[i];

  item.addEventListener('dragstart', function(e){
    console.log('dragstart',e);
    draggedItem= item;
    setTimeout(function(){
      item.style.display='none';
    },0)
  });

  item.addEventListener('dragend', function(){
    console.log('dragend');
    setTimeout(function(){
    draggedItem.style.display='block';
    draggedItem = null;
    },0);
  });
  for(let j =0; j< lists.length; j ++){
    const list=lists[j];
    list.addEventListener('drop' function (e){
      console.log('drop');
      this.append(draggedItem);
    });
  }
}
