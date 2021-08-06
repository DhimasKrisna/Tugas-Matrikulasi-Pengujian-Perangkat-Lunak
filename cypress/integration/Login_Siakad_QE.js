  describe('Login Pada SIAKAD', () => {
    it('Membuka halaman', () => {
      cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
    //   cy.get('#form_login > div.form-actions > button').click()
    })

    it('Login Username dan Password salah', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('test')
        cy.get('#password').type('test')
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username / Password Salah')
      })
    
    it('Login Username benar, Password salah', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('1831710132')
        cy.get('#password').type('test')
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username / Password Salah')
      })

    it('Login Username salah, Password benar', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('test')
        cy.get('#password').type('1831710132') //maaf saya tidak masukkan yang asli karina hasil test isinya sama
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username / Password Salah')
      })
    
    it('Login Username benar, Password kosong', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('1831710132')
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Password harus diisi')
      })

    it('Login Username kosong, Password benar', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#password').type('1831710132') //maaf saya tidak masukkan yang asli karina hasil test isinya sama
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username harus diisi')
      })
    
    it('Login Username kosong, Password kosong', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username harus diisi')
      })
    
    it('Login Username dan Password benar dengan menampilkan Password', () => {
        cy.visit('http://siakad.polinema.ac.id')
        cy.get('#username').type('1831710132')
        cy.get('#password').type('1831710132') // maaf saya tidak masukkan password yang benar takut akun tersebar
        cy.get('#chk_tampilkan').click()
        cy.get('#form_login > div.form-actions > button').click()
      })

  })


//   describe('Login Username Salah', () => {
//     it('successfully loads', () => {
//       cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
//       cy.get('#form_login > div.form-actions > button').click()
//     })
//   })

//   describe('Login Password Salah', () => {
//     it('successfully loads', () => {
//       cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
//       cy.get('#form_login > div.form-actions > button').click()
//     })
//   })

//   describe('Username & Password Kosong', () => {
//     it('successfully loads', () => {
//       cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
//       cy.get('#form_login > div.form-actions > button').click()
//     })
//   })

//   describe('Password Kosong', () => {
//     it('successfully loads', () => {
//       cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
//       cy.get('#form_login > div.form-actions > button').click()
//     })
//   })

//   describe('Login Username Salah', () => {
//     it('successfully loads', () => {
//       cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
//       cy.get('#form_login > div.form-actions > button').click()
//     })
//   })