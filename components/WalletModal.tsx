import { useTheme } from "next-themes";

import React from "react";
import { Toast } from "bootstrap";

const WalletModel = () => {
    return (
        <>
            <div className="modal fade" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="head">
                                <h5>
                                    Wallet Connect to Sports Betting Platform
                                </h5>
                            </div>
                            <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="modal-body">
                                <div className="wallet-connect-form">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}