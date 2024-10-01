const params = new URLSearchParams(window.location.search);
const showImage = params.get('item');

    
const detailContent = document.querySelector('.detailContent');
    
if(detailContent){
    if (showImage === 'uxflower') {
        // 첫 번째 이미지 생성 및 설정
        const detailContent = document.querySelector('.detailContent');
        const imgElement = document.createElement('img');

        // 삽입할 PNG 이미지의 경로 설정
        imgElement.src = './image/uxflowerdetail.png';  // uxport.html 기준 상대 경로
        imgElement.alt = 'UX Flower Image';
        imgElement.width = 700;  // 필요에 따라 크기 조정
        
  

        // .detailContent에 이미지 추가
        if (detailContent) {
            detailContent.appendChild(imgElement);
        }
    }else if(showImage === 'uxpregSomenail'){
        const detailContent = document.querySelector('.detailContent');
        const imgElement = document.createElement('img');

        // 삽입할 PNG 이미지의 경로 설정
        imgElement.src = './image/rodingdetail.png';  // uxport.html 기준 상대 경로
        imgElement.alt = 'rodingdetai Image';
        imgElement.width = 700;  // 필요에 따라 크기 조정
        
  
        // .detailContent에 이미지 추가
        if (detailContent) {
            detailContent.appendChild(imgElement);
        }
    }
    //else if로 이어 쓰면 돼
}
    