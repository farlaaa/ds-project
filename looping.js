function loopingYuk(baris) {
    for (let i = 1; i <= baris; i++) {
      let bintang = '';
      for (let j = 1; j <= i; j++) {
        bintang += '*';
      }
      console.log(bintang);
    }
  }
  
  loopingYuk(5); 