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
                    <ul className="bread-tag">
                        <li>
                            <Link href="#0">
                                Home
                            </Link>
                        </li>
                        <li>
                            <i className="fas fa-arrow-right"></i>
                        </li>
                        <li>
                            {title}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;