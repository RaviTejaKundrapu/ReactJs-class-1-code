const name = 'Ravi Teja'
const className = 'greeting'
const user = {
  firstName: 'Ravi Teja',
  lastName: 'K',
}
const fullname = user => user.firstName + ' ' + user.lastName

const element = (
  <div>
    <h1 className={className}>Hello {fullname(user)}!</h1>
    <p className='message'>Good To See You Here</p>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))
