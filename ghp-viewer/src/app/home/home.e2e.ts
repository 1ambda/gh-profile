import { browser, by, element } from 'protractor'

describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home')
  })

  it('should have a title', () => {
    let subject = browser.getTitle()
    let result  = 'gh-profile'
    expect<any>(subject).toEqual(result)
  })

  it('should have `your content here` x-large', () => {
    let subject = element(by.css('[x-large]')).getText()
    let result  = 'Your Content Here'
    expect<any>(subject).toEqual(result)
  })

})
