import { Triangle } from 'react-loader-spinner'

const Loading = () => {

    return (
        <>

            <div className="h-screen w-full text-center flex items-center justify-center bg-primary">

<Triangle
  height="50%"
  width="50%"
  color="cyan"
  ariaLabel="triangle-loading"
                    wrapperStyle={{
      justifyContent: "center",
  }}
  visible={true}
/>
            </div>
        </>
    );
}
export default Loading;
