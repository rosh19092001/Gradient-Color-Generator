import GradientGenerator from "./components/GradientGenerator.jsx";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <GradientGenerator/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default App
