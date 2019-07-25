import Layout from '../components/layout';
import UserTable from '../components/usertable';
import getUser from '../data/userdata';
const User = (props) => (
    <div>
        <Layout>
            <UserTable />
        </Layout>
    </div>
);


export default User;