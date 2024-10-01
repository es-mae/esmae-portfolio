const params = new URLSearchParams(window.location.search);
const showImage = params.get('item');

    
const detailContent = document.querySelector('.detailContent');
    
if(detailContent){
    if (showImage === 'brandingchungnam') {
        // 상세페이지 첫 번째 이미지 생성 및 설정
        const detailContent = document.querySelector('.detailContent');
        const imgElement = document.createElement('img');

        // 상세페이지 삽입할 PNG 이미지의 경로 설정
        imgElement.src = './image/brandingchungnamdetail.png';  // uxport.html 기준 상대 경로
        imgElement.alt = 'chungnam Image';
        imgElement.width = 700;  // 필요에 따라 크기 조정
        
        const imgElement2 = document.createElement('img');
        imgElement2.src = './image/brandingchungnamgif.gif';  // 두 번째 이미지 경로
        imgElement2.alt = 'brandingchungnamgif';
        imgElement2.width = 700;  // 이미지 너비 설정
        imgElement2.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.2)';  // 그림자 효과
        imgElement2.style.marginTop = '20px'; 
  
        // .detailContent에 이미지 추가
        if (detailContent) {
            detailContent.appendChild(imgElement);
            detailContent.appendChild(imgElement2);
        }
    }
    else if (showImage === 'brandingcli'){
        // 첫 번째 이미지 생성 및 설정
        const detailContent = document.querySelector('.detailContent');
        const imgElement = document.createElement('img');

        // 삽입할 PNG 이미지의 경로 설정
        imgElement.src = './image/brandingclidetail.png';  
        imgElement.alt = 'cli Image';
        imgElement.width = 700;  // 필요에 따라 크기 조정
        
  

        // .detailContent에 이미지 추가
        if (detailContent) {
            detailContent.appendChild(imgElement);
        }        
    }
    else if (showImage === 'brandinginkbook'){
        // 첫 번째 이미지 생성 및 설정
        const detailContent = document.querySelector('.detailContent');
        const imgElement = document.createElement('img');

        // 삽입할 PNG 이미지의 경로 설정
        imgElement.src = './image/brandinginkbookdetail.png';  
        imgElement.alt = 'inkbook Image';
        imgElement.width = 700;  // 필요에 따라 크기 조정
        
  

        // .detailContent에 이미지 추가
        if (detailContent) {
            detailContent.appendChild(imgElement);
        }        
    }
    else if (showImage === 'brandingnodong'){
        // 첫 번째 이미지 생성 및 설정
        const detailContent = document.querySelector('.detailContent');
        const imgElement = document.createElement('img');

        // 삽입할 PNG 이미지의 경로 설정
        imgElement.src = './image/brandingnodongdetail.png';  
        imgElement.alt = 'nodong Image';
        imgElement.width = 700;  // 필요에 따라 크기 조정
        
  

        // .detailContent에 이미지 추가
        if (detailContent) {
            detailContent.appendChild(imgElement);
        }        
    }
    else if (showImage === 'brandingpopko'){
        // 첫 번째 이미지 생성 및 설정
        const detailContent = document.querySelector('.detailContent');
        const imgElement = document.createElement('img');

        // 삽입할 PNG 이미지의 경로 설정
        imgElement.src = './image/brandingpopkodetail.png';  
        imgElement.alt = 'popko Image';
        imgElement.width = 700;  // 필요에 따라 크기 조정
        
  

        // .detailContent에 이미지 추가
        if (detailContent) {
            detailContent.appendChild(imgElement);
        }        
    }
}
    