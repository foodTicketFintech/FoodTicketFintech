import React from 'react';


const SignInFrom =()=>{
    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">처음이신가요?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">지금 식권 구매시<br/> <span className="f_700">5%</span> <br/> 추가 충전됩니다.</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Premium Access to all Products</li>
                                    <li><i className="ti-check"></i> Free Testing Tools</li>
                                    <li><i className="ti-check"></i> Unlimited User Accounts</li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
                                <form action="/#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">충전할 금액을 입력해주세요</label>
                                        <input type="text" placeholder="saasland@gmail.com"/>
                                    </div>
                                    
                                    
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three">결제 하기</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignInFrom;