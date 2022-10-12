import { withRouter } from '~/router/withrouter';
function NotFound404(props) {
    const handle = () => {
        props.router.navigate(`/`);
    };
    return (
        <>
            <div>Làm đéo có trang này </div>
            <button onClick={handle} className="btn btn-primary">
                Biến về nhà
            </button>
        </>
    );
}

export default withRouter(NotFound404);
