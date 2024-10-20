// Chạy hàm tạo thông báo ngay khi trang web tải xong
window.onload = function() {
  for (let i = 0; i < 99; i++) { 
    taoThongBaoNgauNhien();
  }

  setTimeout(() => {
    taoThongBaoChuaNut();
    hienThiNut();
  }, 2000);
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
  
  setTimeout(() => {
    thongBao.classList.add('hienThi');
  }, 10);
}

function taoThongBaoChuaNut() {
  let thongBao = document.createElement('div');
  thongBao.className = 'thongBao';

  // Tạo nút bấm
  let nutHienThi = document.createElement('button');
  nutHienThi.id = 'hienThiThiep';
  nutHienThi.innerText = 'Xem thiệp chúc mừng';
  nutHienThi.addEventListener('click', () => {
    hienThiThiep();
  });

  thongBao.appendChild(nutHienThi);

  thongBao.style.top = Math.random() * window.innerHeight + 'px';
  thongBao.style.left = Math.random() * window.innerWidth + 'px';

  document.body.appendChild(thongBao);

  setTimeout(() => {
    thongBao.classList.add('hienThi');
  }, 10);
}

function hienThiThiep() {
  const thiep = document.createElement('div');
  thiep.id = 'thiepChucMung';
  thiep.innerHTML = `
    <h2>Chúc mừng 20/10!</h2>
    <p>Nhân dịp ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn xinh đẹp, rạng rỡ, chúc bạn học tập hăng say, đạt nhiều thành công và luôn vui vẻ trong cuộc sống.</p>
  `;
  document.body.appendChild(thiep);
  thiep.style.display = 'block'; 
}

function hienThiNut() {
  const nutHienThi = document.getElementById('hienThiThiep');
  nutHienThi.style.display = 'block'; 
}
