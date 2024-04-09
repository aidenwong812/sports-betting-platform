import Link from 'next/link';
import React from 'react';
type BreadCrumbProps = {
    title: string;
};

const BreadCrumb = ({ title }: BreadCrumbProps) => {
    return (
        <div className="breadcumnd-banner">
            <div className="container">
                <div className="breadcumd-content">
                    <h1>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;