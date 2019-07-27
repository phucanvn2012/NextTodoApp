import Layout from '../components/layout'
import UserTable from '../components/usertable'
import Link from 'next/link'


const User = (props) => (
    <div>
        <Layout>
            <Link href="/createuser">
                <a>Create</a>
            </Link>
            <Link href="/edituser">
                <a>Edit</a>
            </Link>
            <Link href="/deleteuser">
                <a>Delete</a>
            </Link>
            <UserTable />
        </Layout>
    </div>
);


export default User;