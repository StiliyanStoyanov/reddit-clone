import React, {useEffect, useRef} from "react";
import styled from "@emotion/styled";
import { Details } from "./PostDetails";
import { Title } from "./PostTitle";
import { Info } from "./PostInfo";


export const PostContent = ({post}) => {

    let DetailsRef = useRef(null);
    useEffect(() => {
        if (DetailsRef.current) {
            console.log(DetailsRef);
            let height = DetailsRef.current.offsetHeight;
        }
    }, [DetailsRef])

    return (
        <Container>
            <Details
                subThumbnail={post.subThumbnail}
                subForum={post.subForum}
                creator={post.creator}
                createdAt={post.createdAt}/>
            <Title postName={post.postName}/>
            <Info img={post.img ? post.img : 'Image Not Found'}/>
        </Container>
    )
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`