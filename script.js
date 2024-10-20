// Chạy hàm tạo thông báo ngay khi trang web tải xong
window.onload = function() {
  for (let i = 0; i < 100; i++) { 
    taoThongBaoNgauNhien();
  }
};

function taoThongBaoNgauNhien() {
  let thongBao = document.createElement('div');
  thongBao.className = 'thongBao';

  // Tạo phần lời chúc tiếng Việt
  let loiChucTiengViet = document.createElement('div');
  loiChucTiengViet.innerText = "Chúc mừng 20/10!";
  loiChucTiengViet.style.textAlign = "center";

  // Tạo phần lời chúc tiếng Anh
  let loiChucTiengAnh = document.createElement('div');
  loiChucTiengAnh.innerText = "Happy Vietnamese Women's Day";
  loiChucTiengAnh.style.textAlign = "center";

  // Thêm cả hai phần lời chúc vào thông báo
  thongBao.appendChild(loiChucTiengViet);
  thongBao.appendChild(loiChucTiengAnh);

  // Vị trí ngẫu nhiên cho thông báo
  thongBao.style.top = Math.random() * window.innerHeight + 'px';
  thongBao.style.left = Math.random() * window.innerWidth + 'px';

  document.body.appendChild(thongBao);
  
  // Hiệu ứng mờ dần
  setTimeout(() => { 
    thongBao.classList.add('hienThi'); 
  }, 10);
  setTimeout(() => {
    thongBao.remove(); 
  }, 3000); 
}