module.exports = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard</title>
    <link rel="icon" type="image/x-icon" href="images/favicon.ico" />

    <!-- bootstrap -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <!-- end  -->

    <!-- fonts -->
    <link rel="stylesheet" href="css/animate.css" />

     
    <!-- font-awsome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
      crossorigin="anonymous"
    />
    <!--  -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- modal popups -->
    <div class="modal fade" id="bankroll" tabindex="-1" role="dialog" aria-labelledby="bankroll" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h3 class="modal-title" id="exampleModalLabel">Bankroll</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
            </button>
          </div>
          <div class="modal-body">
            
             
            <ul class="nav nav-tabs chat-history-tabs border-0 bankroll mt-3" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Overview</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Change the bankroll</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">History</a>
              </li>
            </ul>
            <div class="tab-content chat-history-tabContent" id="myTabContent">
              <div class="tab-pane fade show active mt-4" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h5 class="popup_title mb-3">Username</h5>
                <ul>
                  <li>
                    <div class="share_detail">
                      <span>Your share:</span>
                      <span>$0.0001</span>
                  </div>
                </li>
                  <li>
                    <div class="share_detail">
                      <span>Your investing profit:</span>
                      <span>$0.0473762</span>
                  </div>
                </li>
                  <li>
                    <div class="share_detail">
                      <span>Mooning Monkeys bankroll:</span>
                      <span>$1,844.89374</span>
                  </div>
                </li>
                  <li>
                    <div class="share_detail">
                      <span>Investors’ total profit:</span>
                      <span>$4,576.846343</span>
                  </div>
                </li>
                  <li>
                    <div class="share_detail">
                      <span>Commission rate:</span>
                      <span>90.6%</span>
                  </div>
                </li>
                </ul>

                <p>If you want to  learn more about the bankroll, click <a href="#" class="pink"> here. </a></p>
              </div>
              <div class="tab-pane fade mt-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p>Up to 2 % of your investment is deducted as a non-refundable dilution fee. This fee is deducted from your bankroll investment</p>

                <p class="pink">Only invest or divest if you fully understand the consequence.</p>

                <p class="pink mb-1"><strong>Note:</strong></p>
                <p class="mb-0"> <span>Positive value: </span> Money added to the bankroll.</p>
                <p><span>Negative values:</span> Money removed from the bankroll.</p>
                
                <div class="change-bankroll-section">
                  <h5>Change</h5>

                  <div class="change-box">
                  <div class="change-box-left">
                    <div class="c-box-title-img">
                      <img src="images/change-roll-img.svg" alt="" width="35">
                      <h5 class="mb-0 pink">TAK</h5>
                    </div>

                    <div class="change-value">
                      <h5 class="mb-0 pink">+0.15 TAK</h5>
                    </div>

                  </div>
                    
                     
                    <div class="right-bet-box">
                      <div>Max</div>
                      <div>Min</div>
                    </div>
                  </div>

                  <div class="change-box-bottom-btn mt-3">
                    <a href="#" class="cta-btn">
                      <svg class="mr-2" width="28" height="28" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4771 2V6.09562" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.716 4.74316L30.6682 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M40.2127 12.2388L36.6658 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M42.9552 22.478H38.8596" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M40.2127 32.7172L36.6658 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.716 40.2124L30.6682 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.4771 42.956V38.8604" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.2383 40.2124L14.2861 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.74292 32.7172L8.28979 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.99902 22.478H6.09464" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.74292 12.2388L8.28979 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.2383 4.74316L14.2861 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                      Waiting for the game to end
                    </a>
                    <a href="#" class="cta-btn">
                      <svg class="mr-2" width="28" height="28" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4771 2V6.09562" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.716 4.74316L30.6682 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M40.2127 12.2388L36.6658 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M42.9552 22.478H38.8596" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M40.2127 32.7172L36.6658 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.716 40.2124L30.6682 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.4771 42.956V38.8604" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.2383 40.2124L14.2861 36.6655" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.74292 32.7172L8.28979 30.6694" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.99902 22.478H6.09464" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.74292 12.2388L8.28979 14.2866" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.2383 4.74316L14.2861 8.29003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                      Waiting for the game to end 
                    </a>
                  </div>


                  <ul class="mt-4 bullet-2">
                    <li>
                      <div class="share_detail">
                        <span>Your current stake:</span>
                        <span>0%</span>
                    </div>
                    </li>
                    <li>
                      <div class="share_detail">
                        <span>Estimated bankroll change:</span>
                        <span>x amount</span>
                    </div>
                    </li>
                    <li>
                      <div class="share_detail">
                        <span>Estimated fee:</span>
                        <span>x amount</span>
                    </div>
                    </li>
                    <li>
                      <div class="share_detail">
                        <span>Estimated  stake after investing:</span>
                        <span>0.001%</span>
                    </div>
                    </li>
                    <li>
                      <div class="share_detail">
                        <span>Estimated  bankroll after investing:</span>
                        <span>x amount</span>
                    </div>
                    </li>
                   
                  </ul>


                  <p>If you want to  learn more about the bankroll, click <a href="#" class="pink"> here. </a></p>
                </div>
              </div>
              <div class="tab-pane fade mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="change-box mb-3">
                   
                    <div class="c-box-title-img">
                      Amount
                    </div>
                    
                     
                    <div class="right-bet-box">
                      Time
                    </div>
                  </div>
                <div class="change-box filled">
                   
                    <div class="c-box-title-img">
                      <img src="images/change-roll-img.svg" alt="" width="30">
                      <span>+0.001</span>
                    </div>
                    
                     
                    <div class="right-bet-box">
                      <span>2021-10-01 at 14:37</span>
                    </div>
                  </div>
                <div class="change-box odd">
                   
                    <div class="c-box-title-img">
                      <img src="images/change-roll-img.svg" alt="" width="30">
                      <span>+0.001</span>
                    </div>
                    
                     
                    <div class="right-bet-box">
                      <span>2021-10-01 at 14:37</span>
                    </div>
                  </div>
                <div class="change-box filled">
                   
                    <div class="c-box-title-img">
                      <img src="images/change-roll-img.svg" alt="" width="30">
                      <span>+0.001</span>
                    </div>
                    
                     
                    <div class="right-bet-box">
                      <span>2021-06-24 at 16:45</span>
                    </div>
                  </div>
                  

                  <p class="mt-4">
                    <strong class="pink pr-1">Note: </strong>
                     Positive values: Money added to the bankroll. Negative values: Money removed from the bankroll.</p>
                 
              </div>
            </div>
      
            

          </div>
           
        </div>
      </div>
    </div>



    <!-- Leaderboard popip -->
    <div class="modal fade" id="leaderboard" tabindex="-1" role="dialog" aria-labelledby="leaderboard" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h3 class="modal-title" id="exampleModalLabel">Leaderboard</h3>

            <div class="right-headre-section">
              <select class="form-control top-select">
                <option>All time </option>
                <option>All time </option>
                <option>All time </option>
                <option>All time </option>
              </select>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 13C26 9 24.2008 5.4 21.3008 3L25 3L25 1L17 1L17 9L19 9L19 3.80078C22 5.80078 24 9.1 24 13C24 19.1 19.1 24 13 24C6.9 24 2 19.1 2 13C2 6.9 6.9 2 13 2L13 -5.68248e-07C5.8 -8.8297e-07 -2.53526e-07 5.8 -5.68248e-07 13C-8.8297e-07 20.2 5.8 26 13 26C20.2 26 26 20.2 26 13Z" fill="#F001F4"/>
                  </svg>
                  
              </a>
              <button type="button" class="close pl-0" data-dismiss="modal" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                  
              </button>
            </div>
            
          </div>
          <div class="modal-body">
            <div class="table-responsive">
              <table class="table table-borderless leaderboard-table w-100">
                <thead>
                  <tr>
                    <th># Player</th>
                    <th>Wagered</th>
                    <th>Profit</th>
                    <th>Profit (ATH)</th>
                    <th>Profit(ATL)</th>
                    <th>Bets</th>
                  </tr>
                </thead>

                <tbody> 
                  <!-- just for spacing -->
                  <tr>
                    <td colspan="6" style="height: 15px;"></td>
                  </tr>



                  <tr class="odd">
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr>
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr class="odd">
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr>
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr class="odd">
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr>
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr class="odd">
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr>
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr class="odd">
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  <tr>
                    <td>1 Player name</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                    <td>Amount</td>
                  </tr>
                  
                  
                </tbody>
              </table>
            </div>


            <div class="bottom-part-leaderboard">
              <div class="table-records">
                <select class="form-control top-select bottom-select">
                  <option>15 Records</option>
                  <option>20 Records</option>
                  <option>25 Records</option>
                  <option>30 Records</option>
                </select>

                <div class="text-light">
                  Showing <span>15 </span> out of <span>100</span>
                </div>
              </div>


              <div class="right-pagination">
                <nav aria-label="...">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.2963 3.43248L5.2288 10.5L12.2963 17.5675L10.8828 20.3945L0.988281 10.5L10.8828 0.605469L12.2963 3.43248Z" fill="white"/>
                          <path d="M26.0073 3.43248L18.9397 10.5L26.0073 17.5675L24.5938 20.3945L14.6992 10.5L24.5938 0.605469L26.0073 3.43248Z" fill="white"/>
                          </svg>
                      </a>
                    </li>
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.1557 3.43248L5.08817 10.5L12.1557 17.5675L10.7422 20.3945L0.847656 10.5L10.7422 0.605469L12.1557 3.43248Z" fill="white"/>
                          </svg>
                          
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active">
                      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.846259 3.43248L7.91378 10.5L0.846259 17.5675L2.25976 20.3945L12.1543 10.5L2.25976 0.605469L0.846259 3.43248Z" fill="white"/>
                          </svg>
                          
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.7017 3.43248L21.7693 10.5L14.7017 17.5675L16.1152 20.3945L26.0098 10.5L16.1152 0.605469L14.7017 3.43248Z" fill="white"/>
                          <path d="M0.99079 3.43248L8.05831 10.5L0.99079 17.5675L2.4043 20.3945L12.2988 10.5L2.4043 0.605469L0.99079 3.43248Z" fill="white"/>
                          </svg>
                                                    
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </div>


    <!-- Deposit popup -->
    <div class="modal fade" id="deposit" tabindex="-1" role="dialog" aria-labelledby="deposit" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h3 class="modal-title" id="exampleModalLabel">Deposit</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
            </button>
          </div>
          <div class="modal-body">
              <h6 class="text-light">Select coin</h6>

             <div class="select-coin-box p-2">
               <div class="w-100 d-flex align-items-center p-1">
               <img src="images/tak-coin.svg" class="mr-2" width="25" alt="">
               <h6 class="mb-0">TAK</h6>
              </div>

               <select name="" id="" class="form-control top-select bottom-select" style="border: none  !important; width: 70px;">
                 
                <option value="">0.15</option>
                <option value="">0.15</option>
                <option value="">0.15</option>
                <option value="">0.15</option>
                 
              </select>

             </div>


              <div class="amount-balance mt-4 mb-1">
              <h6 class="text-light">Amount</h6>
              <div class="text-light">Wallet Balance: <span>0.15 TAK </span></div>
              </div>
              <div class="select-coin-box p-2">
                <div class="w-100 d-flex align-items-center justify-content-between p-1">
                <div class="d-flex align-items-center">
                  <img src="images/tak-coin.svg" class="mr-2" width="25" alt="">
                  <h6 class="mb-0">TAK</h6>
                </div>
               

                <h6 class="pink mb-0">0.01 TAK</h6>
                <h6 class="mb-0">MAX</h6>
               </div>
 
                <select name="" id="" class="form-control top-select bottom-select" style="border: none  !important; width: 70px;">
                  
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                  
               </select>
 
              </div>


              <a href="#" class="cta-btn justify-content-center mt-3" data-toggle="modal" data-target="#approve">
                Approve
              </a>


              <div class="form-steps mt-4">
                <div class="step">
                  1
                </div>
                <div class="step-line"></div>

                <div class="step incomplete">
                  2
                </div>
              </div>


              <div class="amount-balance mt-4 mb-1">
                <h6 class="text-light">Recent Transactions</h6>
                  <a href="#" class="text-light" style="text-decoration: underline !important;">View History</a>
                </div>


                <div class="recent-transaction-history">
                    <div class="rth-row">
                      <div>Deposit</div>
                      <div class="success-box">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.12375 13.2457C8.93275 13.2457 8.73975 13.1727 8.59375 13.0258L6.21975 10.6528C5.92675 10.3598 5.92675 9.88575 6.21975 9.59275C6.51275 9.29975 6.98675 9.29975 7.27975 9.59275L9.12375 11.4348L13.3397 7.21975C13.6328 6.92675 14.1067 6.92675 14.3997 7.21975C14.6927 7.51275 14.6927 7.98675 14.3997 8.27975L9.65375 13.0258C9.50775 13.1727 9.31575 13.2457 9.12375 13.2457Z" fill="#6DE713"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.5C5.313 1.5 1.5 5.313 1.5 10C1.5 14.687 5.313 18.5 10 18.5C14.687 18.5 18.5 14.687 18.5 10C18.5 5.313 14.687 1.5 10 1.5ZM10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20Z" fill="#6DE713"/>
                          </svg>
                        <strong class="text-green">Success</strong>
                      </div>
                    </div>
                    <div class="rth-row">
                      <div>Amount(BNB)</div>
                      <div>0.089991116556</div>
                    </div>
                    <div class="rth-row">
                      <div>Free(BNB)</div>
                      <div>0</div>
                    </div>
                    <div class="rth-row">
                      <div>Hash</div>
                      <div>0x3279....870066</div>
                    </div>
                    
                </div>
          </div>
           
        </div>
      </div>
    </div>
    <!-- Password confirm -->
    <div class="modal fade" id="approve" tabindex="-1" role="dialog" aria-labelledby="approve" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h3 class="modal-title" id="exampleModalLabel">Please Confirm</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
            </button>
          </div>
          <div class="modal-body text-light">
              <p>Double-check the form for errors and make sure you understand the consequences before clicking ‘Submit’</p>
              <p>You will be charged a non-refundable fee of 0.01 $TAK</p>


              <div class="password-box">
                <h6>Password</h6>
                <input type="password" name="" class="form-control c-input" id="" value="12345">

                <div class="text-right mt-1">
                  <a href="#" class="text-light" style="text-decoration: underline !important;">Forget password?</a>
                </div>

                <div class="change-box-bottom-btn mt-3">
                  <a href="#" class="cta-btn cta-cancel">
                    Cancel
                  </a>
                  <a href="#" class="cta-btn" id="showToast">
                    Submit
                  </a>

                </div>
              </div>
          </div>
           
        </div>
      </div>
    </div>
    <!-- password toast -->
    <div class="toast password" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000000" style="position: absolute; top: 1rem; right: 1rem; z-index: 9999;">
      <div class="toast-header px-4">
    
        <strong class="mr-auto">Deposit Successful</strong>
        <button type="button" class="ml-3 mb-1 close" data-dismiss="toast" aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8968 16.8968L2 2M16.8968 2L2 16.8968" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
            
        </button>
      </div>
      
    </div>

    <!-- withdraw popup -->
    <div class="modal fade" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="withdraw" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h3 class="modal-title" id="exampleModalLabel">Withdraw</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
            </button>
          </div>
          <div class="modal-body">
              <h6 class="text-light">Select coin</h6>

              <div class="select-coin-box p-2">
                <div class="w-100 d-flex align-items-center p-1">
                <img src="images/tak-coin.svg" class="mr-2" width="25" alt="">
                <h6 class="mb-0">TAK</h6>
               </div>
 
                <select name="" id="" class="form-control top-select bottom-select" style="border: none  !important; width: 70px;">
                  
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                  
               </select>
 
              </div>


              <div class="amount-balance mt-4 mb-1">
              <h6 class="text-light">Amount</h6>
              <div class="text-light">Wallet Balance: <span>0.15 TAK </span></div>
              </div>
              <div class="select-coin-box p-2">
                <div class="w-100 d-flex align-items-center justify-content-between p-1">
                <div class="d-flex align-items-center">
                  <img src="images/tak-coin.svg" class="mr-2" width="25" alt="">
                  <h6 class="mb-0">TAK</h6>
                </div>
               

                <h6 class="pink mb-0">0.01 TAK</h6>
                <h6 class="mb-0">MAX</h6>
               </div>
 
                <select name="" id="" class="form-control top-select bottom-select" style="border: none  !important; width: 70px;">
                  
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                 <option value="">0.15</option>
                  
               </select>
 
              </div>

              <div class="text-light text-right mt-2">Wallet Balance: <span>0.15 TAK </span></div>
               
              <a href="#" class="cta-btn justify-content-center mt-4" id="withdraw-btn">
                Withdraw
              </a>

              


              <div class="amount-balance mt-4 mb-1 justify-content-center">
                
                  <a href="#" class="text-light" style="text-decoration: underline !important;">View History</a>
                </div>


               
          </div>
           
        </div>
      </div>
    </div>

    <!-- withdraw toast -->
    <div class="toast withdraw" id="withdraw-toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000" style="position: absolute; top: 1rem; right: 1rem; z-index: 99999;">
      <div class="toast-header px-4">
    
        <strong class="mr-auto">Withdraw Successful</strong>
        <button type="button" class="ml-3 mb-1 close" data-dismiss="toast" aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8968 16.8968L2 2M16.8968 2L2 16.8968" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
            
        </button>
      </div>
      
    </div>


    <!-- network popup -->
    <div class="modal fade" id="network" tabindex="-1" role="dialog" aria-labelledby="network" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h3 class="modal-title" id="exampleModalLabel">Select a  Network</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
            </button>
          </div>
          <div class="modal-body">
              <div class="network-boxes">
                <div class="n-box" data-toggle="modal" data-target="#polygon" >
                  <div class="n-title">
                    Polygon
                  </div>
                  <div class="n-image">
                    <img src="images/network1.svg" alt="" width="30">
                  </div>
                </div>
                <div class="n-box" data-toggle="modal" data-target="#polygon" >
                  <div class="n-title">
                    OKEx
                  </div>
                  <div class="n-image">
                    <img src="images/network2.svg" alt="" width="30">
                  </div>
                </div>
                <div class="n-box" data-toggle="modal" data-target="#polygon" >
                  <div class="n-title">
                    Harmony
                  </div>
                  <div class="n-image">
                    <img src="images/network3.svg" alt="" width="30">
                  </div>
                </div>
                <div class="n-box" data-toggle="modal" data-target="#polygon" >
                  <div class="n-title">
                    Avalanche
                  </div>
                  <div class="n-image">
                    <img src="images/network4.svg" alt="" width="30">
                  </div>
                </div>
                <div class="n-box" data-toggle="modal" data-target="#polygon" >
                  <div class="n-title font-weight-bold">
                    BSC
                  </div>
                  <div class="n-image">
                    <img src="images/network5.svg" alt="" width="30">
                  </div>
                </div>
                <div class="n-box" data-toggle="modal" data-target="#polygon" >
                  <div class="n-title font-weight-bold">
                    Fantom
                  </div>
                  <div class="n-image">
                    <img src="images/network6.svg" alt="" width="30">
                  </div>
                </div>
              </div>    
              
              <p class="text-light mt-3">You are currently browsing <a href="#" class="pink font-weight-bold"> Mooning monkey </a> on the <a href="#" class="pink font-weight-bold">BSC </a>  network</p>
          </div>
           
        </div>
      </div>
    </div>



    <!-- network-categories -->
    <div class="modal fade" id="polygon" tabindex="-1" role="dialog" aria-labelledby="polygon" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 600px;">
        <div class="modal-content">
          <div class="modal-header border-0">
             <div class="categories-top-link">
               <h6 class="text-light mb-0 pr-3 mr-1" style="border-right: 1px solid grey;">BSC</h6>
               <div class="link-part">
               <img src="images/catagories-link-img.svg" class="mr-1" alt="" width="28">
                <a href="https://moonigmonkey.com" class="pink">https://moonigmonkey.com</a>
               </div>
             </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
            </button>
          </div>
          <div class="modal-body">
              
              <h3 class="mt-2">Allow this site to switch the network?</h3>

              <p>This will switch the selected network within Meta mask to a previous added network.</p>

              <a href="#" class="cta-btn cta-cancel d-inline-flex mt-3">
                <svg class="mr-2"  width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 0C9.91958 0 6.4858 1.42235 3.95406 3.95416C1.42232 6.48597 0 9.91984 0 13.5004C9.22983e-05 15.2732 0.349372 17.0288 1.0279 18.6667C1.70642 20.3046 2.7009 21.7928 3.95456 23.0463C5.20821 24.2999 6.69649 25.2942 8.33442 25.9726C9.97235 26.651 11.7279 27.0001 13.5007 27C15.2735 26.9999 17.029 26.6506 18.6669 25.9721C20.3047 25.2935 21.7929 24.299 23.0464 23.0453C24.3 21.7917 25.2943 20.3033 25.9726 18.6654C26.651 17.0274 27.0001 15.2718 27 13.4989C27 6.04422 20.9545 0 13.5 0ZM13.2877 21.3742H13.2159C12.1163 21.3418 11.34 20.5304 11.3723 19.4461C11.4033 18.3802 12.1978 17.6053 13.2609 17.6053L13.3256 17.6081C14.4563 17.6405 15.2241 18.4434 15.1917 19.5586C15.1594 20.6274 14.3789 21.3742 13.2877 21.3742ZM17.9156 12.1897C17.6569 12.5553 17.0888 13.0138 16.3716 13.5721L15.5813 14.1163C15.1481 14.4538 14.8866 14.773 14.7895 15.0838C14.7108 15.3285 14.6742 15.3946 14.6672 15.8939V16.0204H11.6508L11.6592 15.7645C11.6972 14.7182 11.7225 14.0994 12.157 13.5889C12.8391 12.7902 14.3438 11.8198 14.407 11.7791C14.6135 11.6282 14.7935 11.4444 14.94 11.2348C15.2564 10.7975 15.3956 10.4543 15.3956 10.1196C15.3956 9.64994 15.2578 9.2154 14.9836 8.83148C14.7192 8.45741 14.2172 8.27178 13.4916 8.27178C12.7716 8.27178 12.278 8.4996 11.9841 8.9693C11.6803 9.44884 11.527 9.9537 11.527 10.4698V10.5992H8.41781L8.42344 10.4642C8.50359 8.56147 9.18422 7.19034 10.4414 6.39017C11.2331 5.8825 12.2189 5.62515 13.3678 5.62515C14.8697 5.62515 16.1409 5.99078 17.1394 6.7108C18.1533 7.44066 18.6666 8.53475 18.6666 9.96073C18.6652 10.7581 18.4134 11.5076 17.9156 12.1897Z" fill="white"/>
                  </svg>
                  
                Ethereum Network
              </a>


              <hr class="my-4" style="background-color: #322C76;"> 


              <div class="warning-wrap">
                <div class="warning-networks">
                  <svg class="pr-2" width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 0C7.8505 0 0 7.8505 0 17.5C0 27.1495 7.8505 35 17.5 35C27.1495 35 35 27.1495 35 17.5C35 7.8505 27.1495 0 17.5 0ZM19.25 26.25H15.75V15.75H19.25V26.25ZM19.25 12.25H15.75V8.75H19.25V12.25Z" fill="#FABF01"/>
                    </svg>
                    Switching networks will cancel all pending confirmation                  
                </div>

                <div class="close-icon" onclick="removeDiv()">
                  <svg width="15" height="15" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L2 2M21 2L2 21" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    
                </div>
              </div>
             

              <div class="change-box-bottom-btn mt-3">
                <a href="#" class="cta-btn cancel-gradient-border">
                  Cancel
                </a>
                <a href="#" class="cta-btn" id="showToast">
                  Switch network
                </a>

              </div>
              
               


          </div>
           
        </div>
      </div>
    </div>



    <!-- stauts-popups -->
    <div class="modal fade" id="status" tabindex="-1" role="dialog" aria-labelledby="status" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h3 class="modal-title" id="exampleModalLabel">Stats</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4831 33.4831L2 2M33.4831 2L2 33.4831" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
            </button>
          </div>
          <div class="modal-body">
             
              <h5 class="popup_title mb-3">Username</h5>

              <p class="mt-3"><span class="pink pr-2">Joined:</span>Thu Oct 15 2020[11 months ago]</p>

              <div class="change-box-bottom-btn mt-3 three-dif-btn">
                <a href="#" class="cta-btn cta-cancel" style="background: linear-gradient(90deg, #5BFE26 0%, #ADFD37 55.18%, #EFFC45 100%) !important; color: black !important;">
                  Cancel
                </a>
                <a href="#" class="cta-btn" id="showToast" style="background: linear-gradient(270deg, #F044E8 0%, #6A51C9 100%) !important;">
                  Submit
                </a>
                <a href="#" class="cta-btn" id="showToast" style="background: linear-gradient(270deg, #FE8642 0%, #E7251F 100%) !important;">
                  Submit
                </a>

              </div>

              <p class="mt-4"><span class="pink pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</p>

              <ul class="pl-4 stauts-bullet">
                <li>
                  <div class="share_detail">
                    <span>Users</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span>$0.0001</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Bets</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span>$0.0001</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Bankroll</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Wagered</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Return to the player</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Investors profit</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Investors all-time high profit   </span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Commission</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Total cashback</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Total winning bonus</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                <li>
                  <div class="share_detail">
                    <span>Total Shared profit with the community</span>
                    <div>
                      <span style="color: #6968B8;">X %</span>
                      <span> X amount</span>
                    </div>
                    
                </div>
                </li>
                
               
                 
              </ul>


              <p class="mt-4"><span class="pink pr-2">Hint:</span>Click and drag to zoom, hold shift to pan.</p>
              

              <div class="chart-section">
                <div id="div_g" style="width:100%; height:300px;"></div>
              </div>

              <p class="text-center">Interested in participating in the bankroll? Click <a href="#" class="pink">here </a>  to invest!</p>
            </div>
          
           
        </div>
      </div>
    </div>



    <!-- end popups -->
    <div class="dash-main-bg">
      <div id="loader">
        <div class="loader-container">
          <div class="loading-screen"></div>
        </div>
      </div>
      <div class="d-flex" id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper" > 

          <div class="top-logo-icon">
            <div class="sidebar-heading text-center logo mt-3">
              <img src="images/logo.svg" width="80" alt="" />
            </div>
            <div class="close-sidebar mb-4 pl-4 pt-4">
              <svg width="20" height="20" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3361 1.36925L14.3361 1.36926L14.3334 1.37227C14.079 1.64885 13.8749 1.98037 13.7349 2.34876C13.5949 2.71718 13.5223 3.11374 13.5223 3.5152C13.5223 3.91666 13.5949 4.31322 13.7349 4.68164C13.8749 5.05003 14.079 5.38155 14.3334 5.65813L14.334 5.65883L21.6668 13.6622L21.9762 14L21.6668 14.3378L14.334 22.3412L14.3334 22.3419C14.079 22.6185 13.8749 22.95 13.7349 23.3184C13.5949 23.6868 13.5223 24.0833 13.5223 24.4848C13.5223 24.8863 13.5949 25.2828 13.7349 25.6512C13.8749 26.0196 14.079 26.3511 14.3334 26.6277L14.3361 26.6307C14.5884 26.9096 14.8861 27.1282 15.2106 27.2764C15.5349 27.4245 15.8808 27.5 16.2289 27.5C16.577 27.5 16.923 27.4245 17.2473 27.2764C17.5718 27.1282 17.8694 26.9096 18.1218 26.6307L18.1231 26.6292L27.6876 16.1444L27.6889 16.1429C27.9433 15.8663 28.1474 15.5348 28.2874 15.1664C28.4274 14.798 28.5 14.4015 28.5 14C28.5 13.5985 28.4274 13.202 28.2874 12.8336C28.1474 12.4652 27.9433 12.1337 27.6889 11.8571L27.6876 11.8556L18.1231 1.37077L18.1218 1.36925C17.8694 1.09038 17.5718 0.871782 17.2473 0.723597C16.923 0.575486 16.5771 0.5 16.2289 0.5C15.8808 0.5 15.5349 0.575486 15.2106 0.723597C14.8861 0.871782 14.5884 1.09038 14.3361 1.36925ZM8.76905 13.6591L9.08684 14L8.76905 14.3409L1.31107 22.3419C1.31071 22.3423 1.31036 22.3426 1.31001 22.343C1.05612 22.6194 0.852392 22.9505 0.71258 23.3184C0.572561 23.6868 0.5 24.0833 0.5 24.4848C0.5 24.8863 0.572561 25.2828 0.71258 25.6512C0.852587 26.0196 1.05668 26.3511 1.31107 26.6277L1.31382 26.6307C1.56614 26.9096 1.8638 27.1282 2.18826 27.2764C2.51257 27.4245 2.85852 27.5 3.20663 27.5C3.55474 27.5 3.9007 27.4245 4.225 27.2764C4.54946 27.1282 4.84713 26.9096 5.09944 26.6307L5.10082 26.6292L14.6652 16.1444L14.6666 16.1429C14.921 15.8663 15.1251 15.5348 15.2651 15.1664C15.4051 14.798 15.4777 14.4015 15.4777 14C15.4777 13.5985 15.4051 13.202 15.2651 12.8336C15.1251 12.4652 14.921 12.1337 14.6666 11.8571L14.6652 11.8556L5.10082 1.37076C4.58995 0.810735 3.90743 0.505964 3.20663 0.505964C2.50583 0.505964 1.82331 0.810735 1.31244 1.37076C0.800177 1.93233 0.505444 2.70303 0.505444 3.5152C0.505444 4.32647 0.799524 5.09637 1.31075 5.65777C1.31131 5.65839 1.31188 5.65901 1.31244 5.65963L8.76905 13.6591Z" fill="#515189" stroke="#170F26"/>
                </svg>
                
              
            </div>
           
          </div>
          


          <div class="list-group list-group-flush mt-4">
            


            <a href="#" class="list-group-item list-group-item-action active ">
              <img src="images/play.svg" alt="" class="dash-mene-img" />
              <span>Play</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/transaction.svg" alt="" class="dash-mene-img" />
              <span>Transaction History</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/tak.svg" alt="" class="dash-mene-img" />
              <span>TAK Staking</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              <img src="images/monkey.svg" alt="" class="dash-mene-img" />
              <span>Monkey Earnings </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/comic-book.svg" alt="" class="dash-mene-img" />
              <span>Comic Book Earnings</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/bankroll.svg" alt="" class="dash-mene-img" />
              <span>Bankroll</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/cashback.svg" alt="" class="dash-mene-img" />
              <span>Cashback</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/winnig-bonus.svg" alt="" class="dash-mene-img" />
              <span>Winning Bonus</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/referal.svg" alt="" class="dash-mene-img" />
              <span>Referral Program</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src="images/docs.svg" alt="" class="dash-mene-img" />
              <span>Docs</span>
            </a>
          
            
          
          </div>

         
        </div>

        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
          <nav class="d-md-none navbar navbar-expand-lg border-bottom">
            <!-- <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button> -->

            <button
              id="menu-toggle"
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <svg width="20" height="20" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3361 1.36925L14.3361 1.36926L14.3334 1.37227C14.079 1.64885 13.8749 1.98037 13.7349 2.34876C13.5949 2.71718 13.5223 3.11374 13.5223 3.5152C13.5223 3.91666 13.5949 4.31322 13.7349 4.68164C13.8749 5.05003 14.079 5.38155 14.3334 5.65813L14.334 5.65883L21.6668 13.6622L21.9762 14L21.6668 14.3378L14.334 22.3412L14.3334 22.3419C14.079 22.6185 13.8749 22.95 13.7349 23.3184C13.5949 23.6868 13.5223 24.0833 13.5223 24.4848C13.5223 24.8863 13.5949 25.2828 13.7349 25.6512C13.8749 26.0196 14.079 26.3511 14.3334 26.6277L14.3361 26.6307C14.5884 26.9096 14.8861 27.1282 15.2106 27.2764C15.5349 27.4245 15.8808 27.5 16.2289 27.5C16.577 27.5 16.923 27.4245 17.2473 27.2764C17.5718 27.1282 17.8694 26.9096 18.1218 26.6307L18.1231 26.6292L27.6876 16.1444L27.6889 16.1429C27.9433 15.8663 28.1474 15.5348 28.2874 15.1664C28.4274 14.798 28.5 14.4015 28.5 14C28.5 13.5985 28.4274 13.202 28.2874 12.8336C28.1474 12.4652 27.9433 12.1337 27.6889 11.8571L27.6876 11.8556L18.1231 1.37077L18.1218 1.36925C17.8694 1.09038 17.5718 0.871782 17.2473 0.723597C16.923 0.575486 16.5771 0.5 16.2289 0.5C15.8808 0.5 15.5349 0.575486 15.2106 0.723597C14.8861 0.871782 14.5884 1.09038 14.3361 1.36925ZM8.76905 13.6591L9.08684 14L8.76905 14.3409L1.31107 22.3419C1.31071 22.3423 1.31036 22.3426 1.31001 22.343C1.05612 22.6194 0.852392 22.9505 0.71258 23.3184C0.572561 23.6868 0.5 24.0833 0.5 24.4848C0.5 24.8863 0.572561 25.2828 0.71258 25.6512C0.852587 26.0196 1.05668 26.3511 1.31107 26.6277L1.31382 26.6307C1.56614 26.9096 1.8638 27.1282 2.18826 27.2764C2.51257 27.4245 2.85852 27.5 3.20663 27.5C3.55474 27.5 3.9007 27.4245 4.225 27.2764C4.54946 27.1282 4.84713 26.9096 5.09944 26.6307L5.10082 26.6292L14.6652 16.1444L14.6666 16.1429C14.921 15.8663 15.1251 15.5348 15.2651 15.1664C15.4051 14.798 15.4777 14.4015 15.4777 14C15.4777 13.5985 15.4051 13.202 15.2651 12.8336C15.1251 12.4652 14.921 12.1337 14.6666 11.8571L14.6652 11.8556L5.10082 1.37076C4.58995 0.810735 3.90743 0.505964 3.20663 0.505964C2.50583 0.505964 1.82331 0.810735 1.31244 1.37076C0.800177 1.93233 0.505444 2.70303 0.505444 3.5152C0.505444 4.32647 0.799524 5.09637 1.31075 5.65777C1.31131 5.65839 1.31188 5.65901 1.31244 5.65963L8.76905 13.6591Z" fill="#515189" stroke="#170F26"/>
              </svg>
              
              
            </button>


           
          </nav>
          <div class="container-fluid top-part">
            <div class="row p-0">
              <div class="col-sm-12 p-0 mb-0">
                <div class="btn-row-top">

                  <div class="row-top">
                    <a href="#" class="cta-btn">
                      BUY A MONKEY <br> & EARN 
                    </a>
                   
                    <a href="#" class="cta-btn" data-toggle="modal" data-target="#bankroll">
                      JOIN THE <br> BANKROLL & EARN
                    </a>
                    
                    
                    <a href="#" class="cta-btn blue-btn-bg" data-toggle="modal" data-target="#leaderboard">
                      LEADERBOARD
                    </a>
                  </div>

                  <div class="row-top ml-3">
                    <a href="#" class="cta-btn blue-btn-bg px-4"  data-toggle="modal" data-target="#status">
                      HELP
                    </a>
                  
                  </div>

                 
                   


                  <div class="row-top">
                    <a href="#" class="cta-btn">
                      <img class="mr-1" width="30" src="images/buy-stak-now-img.png" alt="">
                      BUY $TAK NOW
                    </a>
                   
                    <a href="#" class="cta-btn bg-transparent coin-select-box dropdown" type="button" id="dropdownMenuButtonprofilenew" data-toggle="dropdown" aria-haspopup="true"          aria-expanded="false">
                      <div class="top-dropdown coin-select">
                        <img src="images/BNB.png"  alt="" width="25">
                        <strong>BNB</strong>

                        <strong class="value pink">1.29</strong>

                        <svg width="15" height="15" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.0764 10.4813L1.07641 10.4813L1.0794 10.4785C1.26339 10.307 1.48439 10.1689 1.73057 10.0741L1.55081 9.6075L1.73057 10.0741C1.97678 9.97921 2.24209 9.92995 2.51086 9.92995C2.77962 9.92995 3.04493 9.97921 3.29114 10.0741L3.47091 9.6075L3.29114 10.0741C3.53732 10.1689 3.75832 10.307 3.94231 10.4785L3.94301 10.4792L9.65972 15.7891L10 16.1052L10.3403 15.7891L16.057 10.4792L16.0577 10.4785C16.2417 10.307 16.4627 10.1689 16.7089 10.0741C16.9551 9.97921 17.2204 9.92995 17.4891 9.92995C17.7579 9.92995 18.0232 9.97921 18.2694 10.0741C18.5156 10.1689 18.7366 10.307 18.9206 10.4785L18.9236 10.4813C19.1091 10.6515 19.254 10.8518 19.3521 11.0695L19.808 10.8641L19.3521 11.0695C19.4502 11.2871 19.5 11.5189 19.5 11.752C19.5 11.9851 19.4502 12.2169 19.3521 12.4345L19.808 12.6398L19.3521 12.4345C19.254 12.6522 19.1091 12.8525 18.9236 13.0227L18.9221 13.0241L11.4329 19.95L11.4315 19.9514C11.2475 20.123 11.0265 20.261 10.7803 20.3559C10.5341 20.4507 10.2688 20.5 10 20.5C9.73123 20.5 9.46593 20.4507 9.21971 20.3559C8.97353 20.261 8.75254 20.123 8.56855 19.9514L8.56705 19.95L1.07791 13.0241L1.07791 13.024L1.0764 13.0227C0.890887 12.8525 0.745951 12.6522 0.647866 12.4345C0.549838 12.2169 0.5 11.9851 0.5 11.752C0.5 11.5189 0.549838 11.2871 0.647865 11.0695C0.74595 10.8518 0.890887 10.6515 1.0764 10.4813ZM9.65658 6.44856L10 6.77309L10.3434 6.44856L16.0577 1.04859C16.0581 1.04825 16.0584 1.0479 16.0588 1.04756C16.2426 0.876485 16.4632 0.738782 16.7089 0.644122C16.9551 0.549257 17.2204 0.499999 17.4891 0.499999C17.7579 0.499999 18.0232 0.549256 18.2694 0.644122C18.5156 0.738973 18.7366 0.87704 18.9206 1.04859L18.9236 1.05137C19.1091 1.22153 19.254 1.42183 19.3521 1.63956L19.808 1.43419L19.3521 1.63956C19.4502 1.85716 19.5 2.08898 19.5 2.32204C19.5 2.5551 19.4502 2.78693 19.3521 3.00453C19.254 3.22226 19.1091 3.42255 18.9236 3.59272L18.9221 3.5941L11.4329 10.5201L11.4315 10.5215C11.2475 10.693 11.0265 10.8311 10.7803 10.9259C10.5341 11.0208 10.2688 11.07 10 11.07C9.73123 11.07 9.46593 11.0208 9.21971 10.9259C8.97353 10.8311 8.75254 10.693 8.56855 10.5215L8.56705 10.5201L1.07791 3.5941C0.705372 3.24958 0.50426 2.79106 0.504259 2.32204C0.504259 1.85303 0.705371 1.3945 1.07791 1.04998C1.45176 0.704246 1.96661 0.503942 2.51086 0.503942C3.05421 0.503942 3.56826 0.703586 3.94195 1.04827C3.94257 1.04884 3.94319 1.04941 3.9438 1.04998L9.65658 6.44856Z" fill="#515189" stroke="#170F26"/>
                          </svg>
                          
                      </div>

                    </a>
                    
                    <div class="dropdown-menu user-profile p-3" aria-labelledby="dropdownMenuButtonprofilenew"  >
                        
                      <div class="drop-profile-section d-block">
                        <div class="c-row " style="background-color: #3c3c9577;">
                          <div class="c-img">
                            <img src="images/USDT.svg" alt="" width="22">
                          </div>
                          <div class="c-text">
                            USDT
                          </div>
                        </div>
                        <div class="c-row">
                          <div class="c-img">
                            <img src="images/cake.svg" alt="" width="22">
                          </div>
                          <div class="c-text">
                            Cake
                          </div>
                        </div>
                        <div class="c-row" style="background-color: #3c3c9577;">
                          <div class="c-img">
                            <img src="images/BUSD.svg" alt="" width="22">
                          </div>
                          <div class="c-text">
                            BUSD
                          </div>
                        </div>
                      </div>
                    </div>
                     
                    <a href="#" class="cta-btn" data-toggle="modal" data-target="#deposit" >
                      DEPOSIT
                    </a>
                    
                    
                    <a href="#" class="cta-btn blue-btn-bg" data-toggle="modal" data-target="#withdraw" >
                      WITHDRAW
                    </a>

                     
                   
                    <a href="#" class="cta-btn bg-transparent" data-toggle="modal" data-target="#network" >
                      <img src="images/dash-dropdown-arrow.svg" alt="" class="mr-2" width="20px">
                      <img src="images/menu-qube.svg" alt="" width="30px">
                    </a>
                    
                    <div class="dropdown">
                      <a href="#" class="cta-btn " type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        0X488B...66JK6J
                      </a>
                      
                      <div class="dropdown-menu user-profile" aria-labelledby="dropdownMenuLink"  >
                          
                        <div class="drop-profile-section">
                          <div class="profile-user">
                            <img src="images/user-img.png" alt="" width="42">
                          </div>
                          <div class="profile-details text-left">
                            <div class="pink font-weight-bold">VIP LEVEL 1</div>
                            <div class="text-light"><span>VIP 0</span> <span>Novice</span></div>
                          </div>
                        </div>
  
                        <hr class="my-4" style="background-color: #515189;">
                       
                        <a class="dropdown-item" href="#">
                          <img src="images/play.svg" alt="" width="20" class="mr-2">
                          Action</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/transaction.svg" alt="" width="20" class="mr-2">
                          Transaction History</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/tak.svg" alt="" width="20" class="mr-2">
                          TAK Staking</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/monkey.svg" alt="" width="20" class="mr-2">
                          Monkey Earnings</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/comic-book.svg" alt="" width="20" class="mr-2">
                          Comic Book Earnings</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/monkey.svg" alt="" width="20" class="mr-2">
                          Mooning Monkey Earnings</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/cashback.svg" alt="" width="20" class="mr-2">
                          Cashback</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/winnig-bonus.svg" alt="" width="20" class="mr-2">
                          Winning Bonus</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/referal.svg" alt="" width="20" class="mr-2">
                          Referral Program</a>
                        <a class="dropdown-item" href="#">
                          <img src="images/docs.svg" alt="" width="20" class="mr-2">
                          Docs</a>
                         
                      </div>
                    </div>
                   
                  </div>
                   
                   
                    
                 
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid dashboard-content">
            <div class="row">
              <div class="col-lg-7">
                <div class="row">
                  <div class="col-lg-8">
                    <img src="images/payout-chart.png" alt="" class="w-100 h-100" style="object-fit: cover; min-height: 525px;">
                    <div class="chart-bottom-btns">
                        <div class="left-three-btns">
                          <a href="#">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_93_427)">
                              <path d="M21.4995 18.7206H8.49951M1.99951 3.45349H6.33285H1.99951ZM21.4995 3.45349H10.6662H21.4995ZM1.99951 11.0871H14.9995H1.99951ZM21.4995 11.0871H19.3328H21.4995ZM1.99951 18.7206H4.16618H1.99951Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              <path d="M8.49967 5.63451C9.69629 5.63451 10.6663 4.65803 10.6663 3.45348C10.6663 2.24894 9.69629 1.27246 8.49967 1.27246C7.30306 1.27246 6.33301 2.24894 6.33301 3.45348C6.33301 4.65803 7.30306 5.63451 8.49967 5.63451Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              <path d="M17.1662 13.2681C18.3628 13.2681 19.3328 12.2916 19.3328 11.087C19.3328 9.88248 18.3628 8.90601 17.1662 8.90601C15.9696 8.90601 14.9995 9.88248 14.9995 11.087C14.9995 12.2916 15.9696 13.2681 17.1662 13.2681Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              <path d="M6.33268 20.9017C7.5293 20.9017 8.49935 19.9252 8.49935 18.7207C8.49935 17.5161 7.5293 16.5397 6.33268 16.5397C5.13607 16.5397 4.16602 17.5161 4.16602 18.7207C4.16602 19.9252 5.13607 20.9017 6.33268 20.9017Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_93_427">
                              <rect width="24" height="23.1524" fill="white" transform="translate(0.379395 0.0146484)"/>
                              </clipPath>
                              </defs>
                              </svg>
                              
                          </a>
                          <a href="#">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_93_427)">
                              <path d="M21.4995 18.7206H8.49951M1.99951 3.45349H6.33285H1.99951ZM21.4995 3.45349H10.6662H21.4995ZM1.99951 11.0871H14.9995H1.99951ZM21.4995 11.0871H19.3328H21.4995ZM1.99951 18.7206H4.16618H1.99951Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              <path d="M8.49967 5.63451C9.69629 5.63451 10.6663 4.65803 10.6663 3.45348C10.6663 2.24894 9.69629 1.27246 8.49967 1.27246C7.30306 1.27246 6.33301 2.24894 6.33301 3.45348C6.33301 4.65803 7.30306 5.63451 8.49967 5.63451Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              <path d="M17.1662 13.2681C18.3628 13.2681 19.3328 12.2916 19.3328 11.087C19.3328 9.88248 18.3628 8.90601 17.1662 8.90601C15.9696 8.90601 14.9995 9.88248 14.9995 11.087C14.9995 12.2916 15.9696 13.2681 17.1662 13.2681Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              <path d="M6.33268 20.9017C7.5293 20.9017 8.49935 19.9252 8.49935 18.7207C8.49935 17.5161 7.5293 16.5397 6.33268 16.5397C5.13607 16.5397 4.16602 17.5161 4.16602 18.7207C4.16602 19.9252 5.13607 20.9017 6.33268 20.9017Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_93_427">
                              <rect width="24" height="23.1524" fill="white" transform="translate(0.379395 0.0146484)"/>
                              </clipPath>
                              </defs>
                              </svg>
                              
                          </a>
                          
                          <div class="btn-group dropup">
                            <a href="#"  type="button" class="btn btn-secondary bg-transparent border-0 shadow-none p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_93_427)">
                                <path d="M21.4995 18.7206H8.49951M1.99951 3.45349H6.33285H1.99951ZM21.4995 3.45349H10.6662H21.4995ZM1.99951 11.0871H14.9995H1.99951ZM21.4995 11.0871H19.3328H21.4995ZM1.99951 18.7206H4.16618H1.99951Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                <path d="M8.49967 5.63451C9.69629 5.63451 10.6663 4.65803 10.6663 3.45348C10.6663 2.24894 9.69629 1.27246 8.49967 1.27246C7.30306 1.27246 6.33301 2.24894 6.33301 3.45348C6.33301 4.65803 7.30306 5.63451 8.49967 5.63451Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                <path d="M17.1662 13.2681C18.3628 13.2681 19.3328 12.2916 19.3328 11.087C19.3328 9.88248 18.3628 8.90601 17.1662 8.90601C15.9696 8.90601 14.9995 9.88248 14.9995 11.087C14.9995 12.2916 15.9696 13.2681 17.1662 13.2681Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                <path d="M6.33268 20.9017C7.5293 20.9017 8.49935 19.9252 8.49935 18.7207C8.49935 17.5161 7.5293 16.5397 6.33268 16.5397C5.13607 16.5397 4.16602 17.5161 4.16602 18.7207C4.16602 19.9252 5.13607 20.9017 6.33268 20.9017Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_93_427">
                                <rect width="24" height="23.1524" fill="white" transform="translate(0.379395 0.0146484)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                
                            </a>

                            <div class="dropdown-menu prevent-drop timeline-bg">
                                  <h6 class="pink">Animation</h6>

                                  <ul class="nav nav-pills mb-3 tabs-common" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                      <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">3D</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">2D</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Original</a>
                                    </li>
                                  </ul>

                                  <h6 class="pink">Sound</h6>

                                  <div class="toggle-switches">
                                    <table class="table table-borderless">
                                      <tr class="odd">
                                        <td>Take Off</td>
                                        <td>
                                          <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch1">
                                            <label class="custom-control-label" for="customSwitch1">On</label>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Take Off</td>
                                        <td>
                                          <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch12">
                                            <label class="custom-control-label" for="customSwitch12">On</label>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr class="odd">
                                        <td>Take Off</td>
                                        <td>
                                          <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch13">
                                            <label class="custom-control-label" for="customSwitch13">On</label>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Take Off</td>
                                        <td>
                                          <div class="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch14">
                                            <label class="custom-control-label" for="customSwitch14">On</label>
                                          </div>
                                        </td>
                                      </tr>
                                      
                                    </table>

                                    <div class="volume-btn">
                                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8084 0.0297091C11.7486 0.00314119 11.6825 -0.00586684 11.6178 0.00373207C11.5531 0.013331 11.4925 0.0411946 11.4429 0.0839795L5.75193 4.99744H0.338349C0.248613 4.99744 0.162537 5.03316 0.0990844 5.09671C0.0356316 5.16026 0 5.24642 0 5.3363V11.6595C0 11.7493 0.0356316 11.8355 0.0990844 11.899C0.162537 11.9626 0.248613 11.9983 0.338349 11.9983H5.75193L11.4362 16.9118C11.499 16.964 11.5779 16.9927 11.6595 16.993C11.7064 17.0023 11.7547 17.0023 11.8016 16.993C11.8603 16.9667 11.9102 16.9239 11.945 16.8697C11.9799 16.8156 11.9982 16.7525 11.9978 16.6881V0.368568C12.0058 0.299317 11.9917 0.229347 11.9577 0.168529C11.9237 0.107711 11.8715 0.0591293 11.8084 0.0297091Z" fill="white"/>
                                        <path d="M15.3436 14.9999C15.2538 14.9991 15.1677 14.9643 15.1021 14.9024C15.0698 14.8699 15.0441 14.8313 15.0265 14.7888C15.009 14.7463 15 14.7008 15 14.6547C15 14.6087 15.009 14.563 15.0265 14.5205C15.0441 14.478 15.0698 14.4395 15.1021 14.4071C16.5137 12.9697 17.3059 11.0263 17.3059 9.00076C17.3059 6.97523 16.5137 5.03185 15.1021 3.59442C15.038 3.52781 15.0027 3.43814 15.004 3.34525C15.0053 3.25237 15.0431 3.16374 15.109 3.09899C15.1748 3.03423 15.2635 2.99873 15.3554 3.00003C15.4473 3.00134 15.5349 3.03936 15.5989 3.10597C17.137 4.67381 18 6.79264 18 9.00076C18 11.2089 17.137 13.3275 15.5989 14.8954C15.5655 14.9293 15.5257 14.9559 15.4818 14.9739C15.4379 14.9919 15.3909 15.0008 15.3436 14.9999Z" fill="white"/>
                                        <path d="M14.3235 13C14.2486 12.999 14.1759 12.9714 14.1163 12.9213C14.0511 12.8588 14.0106 12.7707 14.0033 12.6756C13.996 12.5805 14.0226 12.486 14.0774 12.4124C14.902 11.3125 15.3534 9.92812 15.3534 8.49881C15.3534 7.0695 14.902 5.68499 14.0774 4.58508C14.0497 4.54959 14.0286 4.50828 14.0155 4.46363C14.0024 4.41898 13.9975 4.37199 14.0012 4.32521C14.0048 4.27844 14.0168 4.23287 14.0366 4.19134C14.0564 4.14981 14.0835 4.11311 14.1163 4.08337C14.1828 4.0227 14.2682 3.99326 14.3541 4.0013C14.44 4.00934 14.5197 4.05424 14.5761 4.12642C15.4964 5.35573 16 6.90225 16 8.49881C16 10.0954 15.4964 11.6417 14.5761 12.871C14.545 12.9116 14.5063 12.9441 14.4627 12.9664C14.419 12.9887 14.3715 13.0001 14.3235 13Z" fill="white"/>
                                        <path d="M13.521 10.9999C13.426 11.0012 13.3325 10.9853 13.2514 10.9543C13.1347 10.9086 13.0511 10.8362 13.0182 10.7524C12.9852 10.6685 13.0057 10.5798 13.0752 10.5053C13.6579 9.90067 13.9659 9.20757 13.9659 8.50088C13.9659 7.7942 13.6579 7.10094 13.0752 6.49631C13.0398 6.45956 13.0162 6.4188 13.0059 6.37634C12.9956 6.33389 12.9988 6.29061 13.0151 6.24891C13.0315 6.20721 13.0608 6.16783 13.1013 6.13324C13.1418 6.09865 13.1929 6.0695 13.2514 6.04728C13.3099 6.02506 13.3749 6.01021 13.4425 6.00374C13.5101 5.99728 13.5791 5.99919 13.6455 6.00946C13.712 6.01974 13.7745 6.0382 13.8296 6.06365C13.8847 6.0891 13.9313 6.12112 13.9667 6.15787C14.6429 6.86568 15 7.67556 15 8.50088C15 9.3262 14.6429 10.1359 13.9667 10.8437C13.9202 10.8917 13.8547 10.9314 13.7766 10.9588C13.6985 10.9861 13.6104 11.0003 13.521 10.9999Z" fill="white"/>
                                        </svg>

                                        <form>
                                          <div class="form-group mb-0">
                                            <input type="range" class="form-control-range" id="formControlRange">
                                          </div>
                                        </form>
                                        
                                    </div>
                                  </div>
                                   
                            </div>
                            
                            
                          </div>
                        </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="dash-bg-new h-100">
                      <div class="dash-title mb-2">Bet Type</div>
                      <ul class="nav nav-pills mb-3 tabs-common" id="pills-tab3" role="tablist" >
                        <li class="nav-item w-50" role="presentation">
                          <a class="nav-link active" id="pills-home-tab5" data-toggle="pill" href="#pills-home5" role="tab" aria-controls="pills-home5" aria-selected="true">Manual</a>
                        </li>
                        <li class="nav-item w-50" role="presentation">
                          <a class="nav-link" id="pills-profile-tab5" data-toggle="pill" href="#pills-profile5" role="tab" aria-controls="pills-profile5" aria-selected="false">Auto</a>
                        </li>
                         
                      </ul>
                      <div class="tab-content" id="myTabContent5">
                        <div class="tab-pane fade show active" id="pills-home5" role="tabpanel" aria-labelledby="home-tab5">
                          <div class="bet-type-box">
                            <div class="left-bet-box">
                              <small>
                                Bet Amount
                              </small>
                              <h5> $ 5,00</h5>
                            </div>

                            <div class="right-bet-box">
                              <div>1/2</div>
                              <div>Double</div>
                              <div>Max</div>
                              <div>Min</div>
                            </div>
                          </div>
                          <div class="bet-type-box">
                            <div class="left-bet-box">
                              <small>
                                Bet Amount
                              </small>
                              <h5> $ 5,00</h5>
                            </div>

                             
                          </div>

                          <a href="#" class="cta-pink">
                            Play
                          </a>


                          <div class="recent-wins-table mt-2">
                            <table class="w-100">
                              <tr class="table-box-title">
                                <th colspan="3" class="p-1">My Recent Wins</th>
                              </tr>

                              <tr>
                                <td>Wager</td>
                                <td>Mult</td>
                                <td>Payout</td>
                              </tr>
                              
                              <tr class="odd">
                                <td>X amount</td>
                                <td class="text-green">2.50x</td>
                                <td>X amount</td>
                              </tr>
                              <tr>
                                <td>X amount</td>
                                <td class="text-green">2.50x</td>
                                <td>X amount</td>
                              </tr>
                              <tr class="odd">
                                <td>X amount</td>
                                <td class="text-green">2.50x</td>
                                <td>X amount</td>
                              </tr>
                              <tr>
                                <td>X amount</td>
                                <td class="text-green">2.50x</td>
                                <td>X amount</td>
                              </tr>
                              
                            </table>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile5" role="tabpanel" aria-labelledby="profile-tab5">
                          <div class="bet-type-box">
                            <div class="left-bet-box">
                              <small>
                                Bet Amount
                              </small>
                              <h5>$ 0</h5>
                            </div>

                            <div class="right-bet-box">
                              <div>1/2</div>
                              <div>Double</div>
                              <div>Max</div>
                            </div>
                          </div>
                        
                          <div class="bet-double-box">
                            <div class="bet-type-box w-100">
                              <div class="left-bet-box">
                                <small>
                                  Auto Cashout
                                </small>
                                <h5>$ 50.00</h5>
                              </div>
   
                            </div>

                            <div class="bet-type-box w-100">
                              <div class="left-bet-box">
                                <small>
                                  Total Bets
                                </small>
                                <h5>1</h5>
                              </div>
                              <div class="right-bet-box">
                                <svg width="15" height="15" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.12107 2.879L9.20407 4.962L9.21107 4.956L10.6631 6.408L10.6691 6.414L12.7911 8.536C13.4904 9.23513 14.3813 9.7112 15.3512 9.90402C16.321 10.0968 17.3263 9.99775 18.2399 9.61927C19.1534 9.2408 19.9342 8.59993 20.4836 7.77772C21.0329 6.9555 21.3261 5.98885 21.3261 5C21.3261 4.01115 21.0329 3.04451 20.4836 2.22229C19.9342 1.40007 19.1534 0.759207 18.2399 0.38073C17.3263 0.00225353 16.321 -0.0968397 15.3512 0.0959795C14.3813 0.288799 13.4904 0.764871 12.7911 1.464L12.0771 2.178L13.4921 3.592L14.2051 2.879C14.6246 2.45935 15.1591 2.17354 15.7411 2.05771C16.3231 1.94188 16.9263 2.00124 17.4745 2.22828C18.0228 2.45531 18.4914 2.83983 18.8211 3.3332C19.1507 3.82656 19.3267 4.40662 19.3267 5C19.3267 5.59338 19.1507 6.17344 18.8211 6.66681C18.4914 7.16017 18.0228 7.54469 17.4745 7.77173C16.9263 7.99876 16.3231 8.05812 15.7411 7.94229C15.1591 7.82646 14.6246 7.54065 14.2051 7.121L12.1331 5.049L12.1261 5.055L8.53607 1.465C7.83687 0.765589 6.94595 0.289235 5.97601 0.0961865C5.00606 -0.096862 4.00065 0.00206628 3.08693 0.38046C2.17321 0.758854 1.39223 1.39972 0.842757 2.22199C0.293283 3.04427 0 4.01103 0 5C0 5.98897 0.293283 6.95573 0.842757 7.77801C1.39223 8.60029 2.17321 9.24115 3.08693 9.61954C4.00065 9.99794 5.00606 10.0969 5.97601 9.90382C6.94595 9.71077 7.83687 9.23442 8.53607 8.535L9.24907 7.822L7.83507 6.408L7.12107 7.121C6.70155 7.54065 6.167 7.82646 5.58503 7.94229C5.00306 8.05812 4.39982 7.99876 3.85159 7.77173C3.30335 7.54469 2.83477 7.16017 2.50508 6.66681C2.1754 6.17344 1.99943 5.59338 1.99943 5C1.99943 4.40662 2.1754 3.82656 2.50508 3.3332C2.83477 2.83983 3.30335 2.45531 3.85159 2.22828C4.39982 2.00124 5.00306 1.94188 5.58503 2.05771C6.167 2.17354 6.70155 2.45935 7.12107 2.879V2.879Z" fill="white"/>
                                  </svg>
                                  
                              </div>
  
                               
                            </div>
                          </div>

                          <div class="bet-type-box">
                            <div class="left-bet-box">
                              <small>
                                On Win
                              </small>
                              <h5>% 0.00</h5>
                            </div>

                            <div class="right-bet-box">
                              <div>Increase</div>
                              <div>Reset</div>
                            </div>
                          </div>

                          <div class="bet-type-box">
                            <div class="left-bet-box">
                              <small>
                                On Loss
                              </small>
                              <h5>% 0.00</h5>
                            </div>

                            <div class="right-bet-box">
                              <div>Increase</div>
                              <div>Reset</div>
                            </div>
                          </div>

                          <div class="bet-double-box">
                            <div class="bet-type-box w-100">
                              <div class="left-bet-box">
                                <small>
                                  Stop on Profit
                                </small>
                                <h5>% 0.00</h5>
                              </div>

                              <div class="right-bet-box">
                                <img src="images/pink-info.svg" width="20" alt="">
                              </div>
   
                            </div>
                            <div class="bet-type-box w-100">
                              <div class="left-bet-box">
                                <small>
                                  Stop on Loss
                                </small>
                                <h5>1</h5>
                              </div>

                              <div class="right-bet-box">
                                <img src="images/pink-info.svg" width="20" alt="">
                              </div>
   
                            </div>

                            
                          </div>

                          <a href="#" class="cta-pink">
                            Start Autobet
                          </a>
                         
                         
                        </div>
                         
                      </div>
                    </div>
                  </div>


                  <div class="col-lg-12">
                    <div class="dash-bg-new chat-history-dash-bg p-0 h-100">
                      <div class="vertical-tabs-ch">
                        <div class="setting-icon">
                          
                            <svg width="22" height="22" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.7494 0.255007C17.1757 0.255007 17.5571 0.511207 17.7006 0.894807L18.7243 3.63461C19.0912 3.72281 19.4058 3.81101 19.6726 3.90341C19.9641 4.00421 20.3396 4.15681 20.8036 4.36541L23.1874 3.14741C23.382 3.04788 23.6048 3.01195 23.8223 3.04502C24.0398 3.07808 24.2403 3.17836 24.3938 3.33081L26.4905 5.42381C26.7689 5.70241 26.8472 6.10981 26.6906 6.46541L25.5727 8.99521C25.7583 9.32421 25.9062 9.60561 26.0193 9.84081C26.1411 10.097 26.2919 10.4498 26.4717 10.9048L29.0773 11.9828C29.4688 12.1438 29.711 12.5218 29.6849 12.9264L29.4935 15.8314C29.4804 16.0201 29.4102 16.201 29.2916 16.3516C29.1731 16.5021 29.0113 16.6158 28.8265 16.6784L26.3586 17.5254C26.2875 17.8544 26.2136 18.1358 26.1353 18.3738C26.009 18.7414 25.8648 19.103 25.7032 19.4574L26.9429 22.1034C27.0304 22.2893 27.054 22.4974 27.0101 22.6972C26.9663 22.8969 26.8574 23.0779 26.6993 23.2136L24.3416 25.2464C24.1864 25.3797 23.9926 25.464 23.7863 25.488C23.58 25.5121 23.3711 25.4747 23.1874 25.3808L20.7572 24.1376C20.377 24.332 19.9848 24.5036 19.5827 24.6514L18.5213 25.035L17.5788 27.555C17.509 27.7396 17.383 27.8994 17.2174 28.0136C17.0518 28.1278 16.8543 28.1909 16.6508 28.1948L13.8958 28.255C13.687 28.2603 13.4815 28.203 13.3078 28.0909C13.1341 27.9788 13.0006 27.8175 12.9258 27.6292L11.8151 24.7914C11.4361 24.6664 11.0609 24.531 10.6899 24.3854C10.3864 24.2586 10.0875 24.1218 9.79377 23.9752L7.03877 25.112C6.85724 25.1868 6.65712 25.209 6.46275 25.1759C6.26838 25.1429 6.08816 25.056 5.94402 24.9258L3.90532 23.0792C3.75354 22.9423 3.65017 22.7628 3.60984 22.5661C3.5695 22.3694 3.59425 22.1654 3.68057 21.983L4.86522 19.491C4.70767 19.1958 4.5616 18.8951 4.42732 18.5894C4.27058 18.2152 4.12551 17.8366 3.99232 17.454L1.39682 16.691C1.18585 16.6294 1.00184 16.5023 0.873359 16.3294C0.744882 16.1565 0.679134 15.9475 0.686324 15.7348L0.787824 13.0454C0.795049 12.8699 0.851822 12.6997 0.952004 12.5531C1.05219 12.4066 1.19197 12.2892 1.35622 12.2138L4.07932 10.951C4.20547 10.5044 4.31567 10.1572 4.41282 9.90381C4.54962 9.56535 4.70153 9.23277 4.86812 8.90701L3.68782 6.49901C3.59825 6.31614 3.57105 6.11056 3.61013 5.91183C3.64921 5.71309 3.75257 5.53145 3.90532 5.39301L5.94112 3.53661C6.08383 3.40665 6.2624 3.31928 6.45533 3.285C6.64827 3.25072 6.84735 3.27101 7.02862 3.34341L9.78072 4.44101C10.0852 4.24501 10.3607 4.08681 10.6101 3.95941C10.9074 3.80681 11.3047 3.64721 11.8049 3.47501L12.7619 0.897607C12.8327 0.708983 12.962 0.546041 13.1322 0.431031C13.3025 0.316021 13.5053 0.254548 13.7131 0.255007H16.7494ZM15.2211 10.0816C12.804 10.0816 10.845 11.9506 10.845 14.2578C10.845 16.565 12.804 18.4354 15.2211 18.4354C17.6368 18.4354 19.5958 16.565 19.5958 14.2578C19.5958 11.9506 17.6383 10.0816 15.2211 10.0816Z" fill="#5C52C5"/>
                              </svg>
                              
                          
                        </div>
                        <ul class="nav nav-pills tabs-common flex-grow-1" id="pills-tab" role="tablist" style="background-color: #363663;">
                          <li class="nav-item w-50" role="presentation">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="false">
                              <svg class="mr-2" width="22" height="22" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.8269 25.5636L27.8197 25.5274C27.1617 22.2105 26.2935 20.1841 25.8168 19.2416C26.1869 17.854 26.3734 16.4238 26.3715 14.9877C26.3715 6.98005 20.6911 0.487672 13.684 0.487672C6.67683 0.487673 0.996459 6.98005 0.996459 14.9877C0.99646 22.9953 6.67684 29.4877 13.684 29.4877C16.874 29.4877 19.7921 28.141 22.0215 25.917C23.4535 26.0726 24.8631 26.3913 26.2228 26.8668L26.2428 26.8722C26.6322 27.0074 27.0173 27.1549 27.3973 27.3145C27.7345 27.4577 28.1115 27.1804 28.0535 26.8197C27.9848 26.3998 27.9092 25.981 27.8269 25.5636ZM22.1936 24.1136C21.9283 24.0882 21.6606 24.1217 21.4097 24.2116C21.1587 24.3015 20.9307 24.4457 20.7418 24.6338C18.8133 26.555 16.3447 27.6752 13.684 27.6752C7.89846 27.6752 2.80896 22.2304 2.80896 14.9877C2.80896 7.74492 7.89846 2.30017 13.684 2.30017C19.4713 2.30017 24.559 7.74492 24.559 14.9877C24.5608 16.2653 24.3951 17.5377 24.066 18.7722C23.9504 19.2036 23.9981 19.6625 24.2001 20.0609C24.5553 20.7623 25.2332 22.3084 25.8186 24.835C24.6353 24.4825 23.4218 24.241 22.1936 24.1136Z" fill="white"/>
                                </svg>
                              CHAT
                            </a>
                          </li>
                          <li class="nav-item w-50" role="presentation">
                            <a class="nav-link " id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true">
                              <svg class="mr-2" width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77832 13.8533L5.77832 12.4441C5.77832 12.3152 5.88379 12.2098 6.0127 12.2098L14.0781 12.2098C14.1543 12.2098 14.2246 12.2449 14.2686 12.3064L17.8047 17.1492C17.8809 17.2547 17.8604 17.4012 17.7549 17.4773L16.6123 18.3152C16.5039 18.3943 16.3574 18.3709 16.2842 18.2654L13.2637 14.0877L6.0127 14.0877C5.88379 14.0877 5.77832 13.9822 5.77832 13.8533ZM7.98145 20.2928L9.10352 24.8865C9.13868 25.033 9.02735 25.1765 8.87793 25.1765L4.14649 25.2C3.9502 25.2 3.83887 24.9744 3.96192 24.8221L7.56836 20.2049C7.59536 20.17 7.63165 20.1434 7.67308 20.1282C7.7145 20.113 7.75937 20.1099 7.80252 20.119C7.84567 20.1282 7.88536 20.1494 7.91701 20.1801C7.94866 20.2109 7.971 20.2499 7.98145 20.2928ZM16.8027 25.2058L16.2314 23.5447C16.2116 23.4868 16.2152 23.4234 16.2415 23.3681C16.2678 23.3128 16.3146 23.27 16.3721 23.2488C16.5215 23.1932 16.668 23.1346 16.8145 23.073C18.0479 22.5516 19.1582 21.8045 20.1104 20.8494C21.0578 19.9049 21.8129 18.7856 22.334 17.5535C22.8736 16.2771 23.1506 14.9051 23.1484 13.5193C23.1484 12.1189 22.876 10.7625 22.334 9.48515C21.8129 8.25304 21.0578 7.13372 20.1104 6.18925C19.1582 5.2371 18.0479 4.49003 16.8145 3.96562C15.5374 3.42895 14.1656 3.15399 12.7803 3.15702C11.3799 3.15702 10.0205 3.42948 8.74317 3.97148C7.50977 4.49296 6.39942 5.24003 5.44727 6.19511C4.49987 7.13958 3.7447 8.2589 3.22364 9.49101C2.68164 10.7625 2.40918 12.1219 2.40918 13.5223C2.40918 14.9226 2.68164 16.2791 3.22364 17.5564C3.7447 18.7885 4.49987 19.9079 5.44727 20.8523C5.74903 21.1512 6.0625 21.4324 6.39356 21.6902L5.02247 23.4422C2.0752 21.1365 0.179691 17.5476 0.182621 13.5164C0.18555 6.49687 5.88672 0.860148 12.9092 0.93046C19.8086 1.00077 25.3779 6.61112 25.3779 13.5223C25.3779 18.9568 21.9326 23.5857 17.1074 25.3494C16.9844 25.3933 16.8467 25.3289 16.8027 25.2058Z" fill="white"/>
                              </svg>
                              HISTORY
                            </a>
                          </li>
                           
                        </ul>
                      </div>


                      <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="chat-section d-none">
                              <div class="top-language-fix">
                                Current Chat Language: English
                              </div>


                              <div class="chat-msg-part">
                                <div class="c-msg" data-toggle="modal" data-target="#status">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text"> Next 3x HUNCHHOSTUNNER</div>
                                </div>
                                <div class="c-msg" >
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">Stansmirnoff:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">HUNCHOSTUNNER:</div>
                                  <div class="msg-text"> Next 3x HUNCHHOSTUNNER</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">want me to wait till 3?</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">Stansmirnoff:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">HUNCHOSTUNNER:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Skip - A Yew</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">FIRSTALT:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">BITT:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Who who</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">want me to wait till 3?</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">Skip - A Yew</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">want me to wait till 3?</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text"> Pooo-Hooo</div>
                                </div>
                                <div class="c-msg">
                                  <div class="msg-time">09:35</div>
                                  <div class="msg-user pink">R_L786:</div>
                                  <div class="msg-text">want me to wait till 3?</div>
                                </div>
                              </div>
                            <div class="msg-action-wrap">
                              <div class="msg-action">
                                <div class="emoji-part">
                                  <a href="#">
                                    <img src="images/emoji.svg" alt="">
                                  </a>
                                </div>

                                <div class="attachement">
                                  <a href="#">
                                    <img src="images/attachment.svg" alt="">
                                  </a>
                                </div>

                                <div class="type-message">
                                  <input type="text" name="" id="" placeholder="Type something here...">
                                </div>


                                <div class="right-send">
                                  <a href="#">
                                    <img src="images/send-btn.svg" alt="">
                                  </a>
                                </div>
                              </div>

                              <div class="msg-action-plus">
                                <a href="#">
                                  <img src="images/plus-msg-action.svg" alt="">
                                </a>
                              </div>
                            </div>
                             

                              <div class="right-user-details">
                                <div class="country-scroll">
                                  <h6 class="text-light">Countries</h6> 

                                  <div class="country-flags">
                                    <img src="images/country1.png" alt="" width="28">
                                    <img src="images/country2.png" alt="" width="28">
                                    <img src="images/country3.png" alt="" width="28">
                                    <img src="images/country4.png" alt="" width="28">
                                  </div>
                                </div>
                                <div class="country-scroll">
                                  <h6 class="text-light">Users</h6> 

                                  <div class="country-flags">
                                    <div class="user-box-chat active">
                                      <span>BA</span>
                                    </div>
                                    <div class="user-box-chat ">
                                      <span>BA</span>
                                    </div>
                                    <div class="user-box-chat ">
                                      <span>BA</span>
                                    </div>
                                    <div class="user-box-chat active">
                                      <span>BA</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="warning-for-chat text-light">
                                <div class="w-close-icon">
                                  <svg width="22" height="22" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.31364 0.651535C2.00788 -0.0426993 3.13346 -0.0426993 3.82769 0.651535L16.7923 13.6161L29.7568 0.651535C30.4511 -0.0426993 31.5766 -0.0426993 32.2709 0.651535C32.9651 1.34577 32.9651 2.47135 32.2709 3.16558L19.3063 16.1301L32.2709 29.0947C32.9651 29.789 32.9651 30.9145 32.2709 31.6088C31.5766 32.303 30.4511 32.303 29.7568 31.6088L16.7923 18.6442L3.82769 31.6088C3.13346 32.303 2.00788 32.303 1.31364 31.6088C0.61941 30.9145 0.61941 29.789 1.31364 29.0947L14.2782 16.1301L1.31364 3.16558C0.61941 2.47135 0.61941 1.34577 1.31364 0.651535Z" fill="white"/>
                                    </svg>
                                    
                                </div>

                                <div class="w-wrap">
                                  <div class="w-top mt-5">
                                    <div class="w-img">
                                      <img src="images/warning-icon.svg" alt="" width="70">
                                    </div>

                                    <div class="w-titles">
                                      <h5 class="mb-1">Warning !</h5>
                                      <h3 class="mb-0">Signs you are being scammed</h3>
                                    </div>
                                  </div>
                                
                                  <div class="w-details">
                                    


                                    <ul class="pl-4 stauts-bullet">
                                      <li>
                                         
                                          They claim they want you to <span class="pink">gamble for them.</span>  
                                        
                                      </li>
                                      <li>
                                         
                                        They want to <span class="pink">share an account. </span> 
                                        
                                      </li>
                                      <li>
                                        They want you to <span class="pink"> share your screen with them </span> using a program like TeamViewer.
                                        
                                      </li>
                                     
                                    </ul>


                                      <div class="text-right">
                                        <a href="#" class="cta-btn justify-content-center ml-auto" style="max-width: 200px; height: 40px;">
                                          I understand
                                        </a>
                                      </div>
                                     
                                   
                                  </div>
                                </div>
                            </div>



                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                          <div class="chat-history">
                            <div class="ch-top-tabs">
                              <ul class="nav nav-tabs chat-history-tabs border-0 pt-1 mt-3" id="myTab2" role="tablist">
                                <li class="nav-item" role="presentation">
                                  <a class="nav-link active" id="home-tab2" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true">All</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <a class="nav-link" id="profile-tab2" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false">High Wins</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <a class="nav-link" id="contact-tab2" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact2" aria-selected="false">Lucky Wins</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <a class="nav-link" id="contact-tab23" data-toggle="tab" href="#contact23" role="tab" aria-controls="contact23" aria-selected="false">Lucky Wins</a>
                                </li>
                              </ul>
                            </div>
                            <div class="table-scroll-content">
                              <table class="table table-borderless players-table chat-history-table mt-2">
                              
                                <thead>
                                  <tr class="odd">
                                    <th>Game</th>
                                    <th>Address</th>
                                    <th>Time</th>
                                    <th>Wager</th>
                                    <th>Mult</th>
                                    <th>Payout</th>
                                  </tr>
                                  
                                </thead>
                                  
      
                                <tr>
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>Crash</td>
                                    <td class="pink">Name</td>
                                    <td>10:36 AM</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                    <td class="text-green">1.23x</td>
                                    <td>
                                      <div class="coin-part">
                                        <span class="text-green">
                                          +$2.50
                                        </span>
                                        <div class="coin-img">
                                          <img src="images/bitcoin.svg" alt="">
                                        </div>
                                      </div>
                                    </td>
                                </tr>
                                
             
                              </table>
                            </div>
                            
                          </div>
                        </div>
                         
                      </div>
                     
                     
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-5">
                <div class="dash-bg-new p-0 h-100">
                  <table class="table table-borderless players-table mb-0">
                    <tr>
                      <td colspan="4" class="text-center text-blue">
                        Players
                      </td>
                    </tr>

                    <tr>
                      <th>Players: 20</th>
                      <th>Wager</th>
                      <th>Multiplier</th>
                      <th>Payout</th>
                    </tr>


                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="odd">
                      <td>
                        <div class="player-wrap">
                          <span class="active-dot red"></span>
                        <div class="player-name red">
                          Hidden
                        </div>
                        </div>
                        
                      </td>
                      <td>$2.50</td>
                      <td>-</td>
                      <td>
                        <div class="coin-part">
                          <span class="text-green">
                            +$2.50
                          </span>
                          <div class="coin-img">
                            <img src="images/bitcoin.svg" alt="">
                          </div>
                        </div>
                      </td>
                    </tr>
                     



                    <tr class="total-part">
                      <td class="text-purple">Online: 816</td>
                      <td class="text-purple">Playing: 455</td>
                      <td colspan="2" class="text-center text-purple">Total Bet Amount: $23,000</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /#page-content-wrapper -->
      </div>
    </div>
  </body>

  <script src="js/wow.js"></script>
  <script>
    new WOW().init();
  </script>

  <!-- bootstrap -->

  <script
    src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
    crossorigin="anonymous"
  ></script>
  <script src="https://dygraphs.com/dygraph.js"></script>
  <script src="js/custom.js"></script>
  <script type="text/javascript">
    $(window).on('load', function () {
      $('#checkout').modal('show');
    });
  </script>

  <!-- toast script -->
   
  <!-- end -->
</html>`;
