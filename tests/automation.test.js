import LoginPage from '~/src/pages/login.page.js'

describe('My Awesome Website', () => {
  // this test should pass
  it('will show the correct title', () => {
    let loginPage = new LoginPage
    loginPage.visit()
    expect(loginPage.title()).to.equal('Test Page')
  })

  // make these tests pass
  it('will show the the correct extension in myInfo', () => {
    loginPage.visit()
    loginPage.login()
    let data = infoPage.parseData() // hmm, does infoPage exist?

    let expectedData = {
      email: myExtension, //what should I be?
      url: myExtension, //what should I be?
      phone: myExtension //what should I be?,
    }

    expect(data).to.equal(expectedData)
  })

  it('will show the my extension in the JSON output', () => {
    loginPage.visit()
    loginPage.login()
    infoPage.getJsonButton.click() // do I exist?
    let data = infoPage.parseJson() // hmm, does infoPage exist?

    let expectedData = {
      email: myExtension, //what should I be?
      url: myExtension, //what should I be?
      phone: myExtension //what should I be?,
    }

    expect(data[2]).to.equal(thirdEntry)
  })

  it('BONUS: will show NEW chat messages', () => {
    loginPage.visit()
    loginPage.login()
    infoPage.showChats.click() // wait a minute, am I new too?
    let data = infoPage.parseNewChats() // hmm, does infoPage exist?

    let thirdChat = {
      sender: 'Toby Flenderson',
      time: '11:41 AM',
      message: 'What are you guys doing for lunch?'
    }

    expect(data[2]).to.equal(thirdChat)
  })
})
