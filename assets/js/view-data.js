document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengambil data dari row tabel
    function getUserData(row) {
      const imgSrc = row.querySelector('img').src;
      const name = row.querySelector('.ps-2').textContent;
      const email = row.querySelector('.gmail').textContent;
      const userId = row.querySelectorAll('td')[2].textContent;
      const phone = row.querySelectorAll('td')[3].textContent;
      const category = row.querySelectorAll('td')[4].textContent;
      const status = row.querySelector('.badge').textContent;
      
      return {
        imgSrc,
        name,
        email,
        userId,
        phone,
        category,
        status
      };
    }
  
    // Tambahkan event listener untuk icon eye
    document.querySelectorAll('.mdi-eye').forEach(icon => {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', function(e) {
        const row = this.closest('tr');
        const userData = getUserData(row);
        
        // Update modal content
        document.getElementById('userImage').src = userData.imgSrc;
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('userId').textContent = userData.userId;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('userPhone').textContent = userData.phone;
        document.getElementById('userCategory').textContent = userData.category;
        document.getElementById('userStatus').textContent = userData.status;
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('detailModal'));
        modal.show();
      });
    });
  });