import { PropsWithChildren } from "react";


const PostLayout = ({ children }: PropsWithChildren) => {
    return (<div className="mt-4 md:mt-24 flex justify-center">
        
        {children}
        </div>);
};

export default PostLayout;