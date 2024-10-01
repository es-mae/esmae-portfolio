document.getElementById("Branding").addEventListener("click", function() {
    window.location.href = "branding.html";
});
document.getElementById("Graphic").addEventListener("click", function() {
    window.location.href = "graphic.html";
});
document.getElementById("Web").addEventListener("click", function() {
    window.location.href = "web.html";
});
document.getElementById("Ux").addEventListener("click", function() {
    window.location.href = "ux.html";
});
document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html";
});
document.getElementById("footerHome").addEventListener("click", function() {
    window.location.href = "index.html";
});



document.getElementById("projectBranding").addEventListener("click", function() {
    window.location.href = "branding.html";
});
document.getElementById("projectGraphic").addEventListener("click", function() {
    window.location.href = "graphic.html";
});
document.getElementById("projectWeb").addEventListener("click", function() {
    window.location.href = "web.html";
});
document.getElementById("projectUx").addEventListener("click", function() {
    window.location.href = "ux.html";
});


// //모달
// document.getElementById('contactBtn').addEventListener('click', function() {
//     modal.style.display = 'flex'; // 모달 보이기
// });
// document.getElementById('closeModalBtn').addEventListener('click', function() {
//     modal.style.display = 'none'; // 모달 숨기기
// });
// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });
// //모달
// document.getElementById('contactBtn2').addEventListener('click', function() {
//     modal.style.display = 'flex'; // 모달 보이기
// });



document.getElementById('contactBtn').addEventListener('click', function(){
    window.open("https://open.kakao.com/o/s3D861Rg", '_blank');
});
document.getElementById('contactBtn2').addEventListener('click', function(){
    window.open("https://open.kakao.com/o/s3D861Rg", '_blank');
});
document.getElementById('googleBtn').addEventListener('click', function(){
    window.open("https://forms.gle/Jdbb5PvnfPF3dLUL8", '_blank');
});

document.getElementById('googleBtn2').addEventListener('click', function(){
    window.open("https://forms.gle/Jdbb5PvnfPF3dLUL8", '_blank');
});


document.getElementById('projectBtn2').addEventListener('click', function() {
    // #Project 섹션으로 이동
    const projectSection = document.getElementById('Project');
    const offset = 180; // 180px 아래로 더 이동
    const sectionPosition = projectSection.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionPosition - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    document.getElementById('overlay').style.display = 'block'; // 오버레이를 보이게 함
    projectSection.classList.add('highlight'); // 프로젝트 섹션 강조

    // 3초 후 오버레이와 강조 효과 제거
    setTimeout(function() {
        document.getElementById('overlay').style.display = 'none'; // 오버레이 숨기기
        projectSection.classList.remove('highlight'); // 프로젝트 섹션 강조 제거
    }, 1000); // 3초 후에 실행
});

