const Application = require('spectron').Application
const assert = require('assert')
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');


global.before(() => {
  chai.should();
  chai.use(chaiAsPromised);
});

describe('Application launch', function () {
  this.timeout(10000)
  //let app = null;
  const app = new Application ({

    path: 'C:\\Program Files\\Folder\\my.exe',
    args: ['app'],

    webPreferences: {
      nodeIntegration: true,
    },

    chromeDriverArgs: ['remote-debugging-port=9222']
  })

  beforeEach(() => app.start().then((app) => {
    chaiAsPromised.transferPromiseness = app.transferPromiseness;
    return app;
    })
  
  );
    //this.app = new Application({
    //afterEach(() => app.stop());

  it('shows an initial window', async () => {
    const count = await app.client.getWindowCount();
    assert.equal(count, 1);
  })

  it('decreases the window height and width by 10 pixels', async  () => {
    //return app.client
    //.pause(1000)
    app.client.timeoutsImplicitWait(9000);
    app.client.click('#bt-config')
    
    var text = app.client.getText('//*[@id="config"]/div[5]/div[1]/span');
    assert(text === 'Preencha corretamente para continuar'); // true
    //this.timeout(100000)
    //app.client.click('#channel');
    //app.client.waitUntilWindowLoaded(10000)
    //app.client.timeoutsImplicitWait(10000)
    //app.client.elementIdClick('#bt-config')
    //app.client.$('#bt-config').click()
    //const txt = await app.client.$('#bt-config').getText()
    //return assert.equal(txt, 'Executar')
    //app.client.click('#channel')
    //await app.client.waitUntilWindowLoaded();
  })
})
