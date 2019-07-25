import Head from "next/head";
import Navbar from "./navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Todo App</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cerulean/bootstrap.min.css"/>        
        </Head>
        <Navbar/>
        <div>
            {props.children}
        </div>
    </div>

);

export default Layout;

