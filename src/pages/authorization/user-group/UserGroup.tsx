import Search from '../../../components/search'

function UserGroup() {
  return (
    <>
      <div className='columns-3'>
        <div>
          <Search placeHolder='Nhap ten group' />
        </div>
        <div>
        </div>
        <div>
          {' '}
          <Search placeHolder='Nhap ten nguoi dung' />
        </div>
      </div>
    </>
  )
}

export default UserGroup
