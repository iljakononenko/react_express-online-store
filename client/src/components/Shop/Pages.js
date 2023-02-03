import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Pagination} from "react-bootstrap";

const Pages = ({pages, currentPage, setPage}) => {

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item onClick={() => setPage(page)} active={page === currentPage} key={page}>{page}</Pagination.Item>
            )}
        </Pagination>
    );
};

export default Pages;
