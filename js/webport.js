const params = new URLSearchParams(window.location.search);
const showImage = params.get('item');

// showImage가 true일 경우에만 이미지를 detailContent에 삽입

const detailContent = document.querySelector('.detailContent');

if(detailContent){
    if (showImage === 'clothes') {
        // 첫 번째 이미지 생성 및 설정
        const imgElement1 = document.createElement('img');
        imgElement1.src = './image/webclothesdetail.png';  // 첫 번째 이미지 경로
        imgElement1.alt = 'Web clothes Image 1';
        imgElement1.width = 700;  // 이미지 너비 설정

        const textElement = document.createElement('p');
        textElement.textContent = 'Esmae-clothes 사이트 보기';  // 텍스트 설정
        textElement.style.textAlign = 'center';  // 가운데 정렬
        textElement.style.fontSize = '20px';  // 글자 크기 설정
        textElement.style.margin = '80px 0  20px  0 ';  // 텍스트 상하 margin 설정

        // 두 번째 이미지 생성 및 설정
        const imgElement2 = document.createElement('img');
        imgElement2.src = './image/webclothesSomenail.png';  // 두 번째 이미지 경로
        imgElement2.alt = 'Web clothes Image 2';
        imgElement2.width = 493;  // 이미지 너비 설정
        imgElement2.style.boxShadow = '10px 10px 20px rgba(0, 0, 0, 0.2)';  // 그림자 효과
        imgElement2.style.borderRadius = '10px'; 
        imgElement2.style.marginTop = '0px'; 

        imgElement2.addEventListener('click', function() {
            window.open("https://esmae-clothes-bcd1e2ae5f29.herokuapp.com/index.html", '_blank');
        });

        // detailContent에 두 이미지를 모두 추가
        if (detailContent) {
            detailContent.appendChild(imgElement1);  // 첫 번째 이미지 추가
            detailContent.appendChild(textElement);  // 텍스트 추가
            detailContent.appendChild(imgElement2);  // 두 번째 이미지 추가
        }
    }else if(showImage === 'portfolio'){
        const imgElement1 = document.createElement('img');
        imgElement1.src = './image/rodingdetail.png';  // 첫 번째 이미지 경로
        imgElement1.alt = 'rodingdetail';
        imgElement1.width = 700;  // 이미지 너비 설정
        
        // detailContent에 두 이미지를 모두 추가
        if (detailContent) {
            detailContent.appendChild(imgElement1);  // 첫 번째 이미지 추가
    
        }
    }else if(showImage === 'samebut'){
        const imgElement1 = document.createElement('img');
        imgElement1.src = './image/rodingdetail.png';  // 첫 번째 이미지 경로
        imgElement1.alt = 'rodingdetail';
        imgElement1.width = 700;  // 이미지 너비 설정
        
        // detailContent에 두 이미지를 모두 추가
        if (detailContent) {
            detailContent.appendChild(imgElement1);  // 첫 번째 이미지 추가
    
        }
    }
    //else if로 이어 쓰면 돼
}


