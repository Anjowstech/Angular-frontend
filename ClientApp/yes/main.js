(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-work/admin-work.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-work/admin-work.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"    background-color: #f6f5f1\">\n  <div class=\"col-sm-12\">\n    <div style=\"background-color: #f6f5f1\">\n      <form class=\"form-inline\" style=\"margin-left:200px;margin-bottom:40px\">\n        <h2 style=\"    margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1;color: #150485\">SMART</h2>\n        <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color:  #bb2205\">Formulator </h2>\n        <h2 style=\"    margin-top: 20px;font-family: Playfair Display;background-color: #f6f5f1;color: black\">-Admin Work</h2>\n      </form>\n\n      <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">\n        <ng-container ngbNavItem style=\" background-color: #f6f5f1; margin-left: 20px;margin-top: 20px\">\n          <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Default Settings</a>\n          <ng-template ngbNavContent>\n\n            <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n              <label for=\"company\" style=\"margin-left:25px;\">Company Name</label>\n              <input type=\"text\" style=\"margin-left: 20px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Enter Company Name\" id=\"companyname\" size=\"81\">\n\n            </form>\n            <form class=\"form-inline\">\n\n              <label for=\"Address\" style=\"margin-left:75px;\">Address</label>\n              <textarea id=\"Address\" style=\"    width: 700px;margin-left: 20px;margin-top: 10px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"3\"></textarea>\n\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"ph.no\" style=\"margin-left: 25px;\">Phone Number</label>\n              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Phone Number\" id=\"phoneno\" size=\"30\">\n              <label for=\"fax\" style=\"margin-left:85px;\">Fax</label>\n\n              <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"fax\" name=\"Fax\" placeholder=\"Enter Fax Number\" size=\"30\" />\n            </form>\n\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"email\" style=\"margin-left: 90px;\">Email</label>\n              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Email Id\" id=\"email\" size=\"30\">\n              <label for=\"webaddress\" style=\"margin-left:20px;\">Web Address</label>\n\n              <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"webaddress\" name=\"web address\" placeholder=\"Enter Web Address\" size=\"30\" />\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;margin-bottom: 40px\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">Company Logo</label>\n              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"companylogo\" size=\"81\">\n\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Browse</button>\n\n            </form>\n            <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">\n              <ng-container ngbNavItem style=\"    margin-left: 20px;margin-top: 20px\">\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Formulation</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\" text-align:center;   margin-top: 20px; font-family: Playfair Display;background-color: #f6f5f1;color:black\"> Prefix - Formulation Lookup </h2>\n                  <div class=\"row\" style=\"    background-color: #f6f5f1\">\n                    <div class=\"col-sm-9\">\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\">\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" size=\"30\">\n\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Add Prefix</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Delete Prefix</button>\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\">\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                        <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\">\n                        <section class=\"example-section\">\n                          <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                          <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                        </section>\n                      </form>\n                      <mat-radio-group style=\"margin-left: 120px;\">\n                        <mat-radio-button value=\"1\">Cosmetic</mat-radio-button>\n                        <mat-radio-button value=\"2\">Nutrition</mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <label for=\"listofallprefix\">List of All Prefix</label>\n\n                      <div class=\"card\">\n                        <div class=\"card-body\" style=\"width: 20rem;height:10rem;overflow-y:auto\">\n                          <ul>\n                            <li>&nbsp;  AD-Anti Dandruff</li>\n                            <li>&nbsp;  BB-Baby Products</li>\n                            <li>&nbsp;  BT-Body Treatment</li>\n                            <li>&nbsp;  CL-Cleanser</li>\n                            <li>&nbsp;  ET-Eye Treatment</li>\n                            <li>&nbsp;  ETH-Ethnic Hair Care</li>\n                            <li>&nbsp;  ETHS-Ethnic Skin Care</li>\n                            <li>&nbsp;  FC-Foot Care</li>\n                            <li>&nbsp;  HC-Hair Care</li>\n                            <li>&nbsp;  HT-Hand Therapy</li>\n                            <li>&nbsp;  INK-INK</li>\n                          </ul>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                </ng-template>\n              </ng-container>\n\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Marketing Footer</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                    Marketing Footer\n                  </h2>\n                  <form class=\"form-inline\" style=\"  margin-bottom: 30px;\">\n\n                    <label for=\"footer\" style=\"margin-left:75px;\">Footer</label>\n                    <textarea id=\"footer\" style=\"    width: 700px;margin-left: 20px;margin-top: 10px;\" class=\"form-control md-textarea\" size=\"7\" rows=\"6\"></textarea>\n\n                  </form>\n\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Stability</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                    Prefix-Stability Test\n                  </h2>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\">\n\n\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"10\">\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\">\n\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"nextstab\" style=\"margin-left: 95px;\">Next STAB#</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"nextstab\" size=\"30\">\n                  </form>\n\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Raw Materials</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\" text-align: center; margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1; color: black\"> Prefix - Raw Materials </h2>\n                  <div class=\"row\">\n                    <div class=\"col-sm-9\">\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\">\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" size=\"30\">\n\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Add Prefix</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Delete Prefix</button>\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\">\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                        <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\">\n                        <section class=\"example-section\">\n                          <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                          <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                        </section>\n                      </form>\n                      <mat-radio-group style=\"margin-left: 120px;\">\n                        <mat-radio-button value=\"1\">Cosmetic</mat-radio-button>\n                        <mat-radio-button value=\"2\">Nutrition</mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <label for=\"listofallprefix\">List of All Prefix</label>\n\n                      <div class=\"card\">\n                        <div class=\"card-body\" style=\"width: 40rem;\">\n                          <ul>\n                            <li>RAWS-RAWS</li>\n                            <li>RM-Raw Mat</li>\n\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                    <label for=\"srmitem\" style=\"margin-left: 75px;color:firebrick\">RM item# Duplicate Check Validation </label>\n                    <mat-radio-group style=\"margin-left: 20px;\">\n                      <mat-radio-button value=\"1\">Yes</mat-radio-button>\n                      <mat-radio-button value=\"2\">No</mat-radio-button>\n                    </mat-radio-group>\n                    <label for=\"srmitem\" style=\"margin-left: 10px;color:red\">(Same item # cannot be used for another INCI) </label>\n                  </form>\n\n                </ng-template>\n              </ng-container>\n\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Suppliers</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\" text-align: center; margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1; color: black\"> Prefix - Suppliers </h2>\n                  <div class=\"row\">\n                    <div class=\"col-sm-9\">\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\">\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" size=\"30\">\n\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Add Prefix</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Delete Prefix</button>\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\">\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                        <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\">\n                        <section class=\"example-section\">\n                          <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                          <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                        </section>\n                      </form>\n\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <label for=\"listofallprefix\">List of All Prefix</label>\n\n                      <div class=\"card\">\n                        <div class=\"card-body\" style=\"width: 40rem;\">\n                          <ul>\n                            <li>SC-Supplier Code</li>\n\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Customer</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\" text-align: center; margin-top: 20px; font-family: Playfair Display; background-color: #f6f5f1; color: black\"> Prefix - Customer </h2>\n                  <div class=\"row\">\n                    <div class=\"col-sm-9\">\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Prefix\" id=\"prefix\" size=\"20\">\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefixdescription\" style=\"margin-left: 60px;\">Prefix Description</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefixdescription\" size=\"30\">\n\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Add Prefix</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Delete Prefix</button>\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\">\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                        <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\">\n                        <section class=\"example-section\">\n                          <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                          <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                        </section>\n                      </form>\n                      <mat-radio-group style=\"margin-left: 120px;\">\n                        <mat-radio-button value=\"1\">Cosmetic</mat-radio-button>\n                        <mat-radio-button value=\"2\">Nutrition</mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <label for=\"listofallprefix\">List of All Prefix</label>\n\n                      <div class=\"card\">\n                        <div class=\"card-body\" style=\"width: 40rem;\">\n                          <ul>\n                            <li>CC-Customer Code</li>\n                            <li>CT-Customer Code</li>\n\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Project</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"text-align:center;    margin-top: 20px; font-family: Playfair Display;background-color: #f6f5f1;color:black\"> Prefix - Project </h2>\n                  <div class=\"row\">\n                    <div class=\"col-sm-9\">\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"prefix\" style=\"margin-left: 155px;\">Year</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Enter Year\" id=\"prefix\" size=\"20\">\n\n\n\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"30\">\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                        <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\">\n                        <section class=\"example-section\">\n                          <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                          <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                        </section>\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 30px;margin-left:500px;\">\n                      </form>\n                    </div>\n                  </div>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>SampleMgmt</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"    margin-top: 20px;text-align: center;font-family: Playfair Display;background-color: #f6f5f1; color: black\">Prefix-Sample Management </h2>\n                  <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"year\" style=\"margin-left: 145px;\">Year</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"year\" size=\"20\">\n\n\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"10\">\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                    <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;\">Numbering Starts From</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"numberingstartsfrom\" size=\"30\">\n                    <section class=\"example-section\">\n                      <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                      <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                    </section>\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                    <label for=\"numberingstartsfrom\" style=\"margin-left: 15px;color:firebrick\">Do you want all raw materialsin formula to be approved while sampling? </label>\n\n                    <section class=\"example-section\" style=\"color:firebrick\">\n                      <mat-checkbox class=\"example-margin\">Yes </mat-checkbox>\n                      <mat-checkbox class=\"example-margin\">No</mat-checkbox>\n                    </section>\n                  </form>\n\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lab Batch Tkt</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"    margin-top: 20px;text-align: center;\n    font-family: Playfair Display;background-color: #f6f5f1;color: black\">\n                    Prefix-Lab Batch Ticket\n                  </h2>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"prefix\" style=\"margin-left: 145px;\">Prefix</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"year\" size=\"20\">\n\n\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"separator\" style=\"margin-left: 115px;\">Separator</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"separator\" size=\"10\">\n                  </form>\n                  <section class=\"example-section\" style=\"margin-left:300px\">\n                    <mat-checkbox class=\"example-margin\">Auto Generate</mat-checkbox>\n                    <mat-checkbox class=\"example-margin\">Custom</mat-checkbox>\n                  </section>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Unit</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                    Unit Of Maintenance Settings\n                  </h2>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;margin-left:60px\">\n                    <label for=\"Assigned_to\">Default Unit</label>\n                    <select id=\"Assigned_to\" class=\"form-control\" style=\"width:200px;margin-left:20px\">\n                      <option selected>KG</option>\n\n                    </select>\n                  </form>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>21 CFR Approval</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: black\">\n                    21 CFR  part 11 Approval\n                  </h2>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;\">\n                    <label for=\"numberingstartsfrom\" style=\"margin-left: 55px;\">Display re-verification w/password window </label>\n\n                    <section class=\"example-section\">\n                      <mat-checkbox class=\"example-margin\">Yes </mat-checkbox>\n                      <mat-checkbox class=\"example-margin\">No</mat-checkbox>\n                    </section>\n                  </form>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Password Policy</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\" margin-left:200px;   margin-top: 20px; font-family: Playfair Display;background-color: #f6f5f1;color:red\"> SYSTEM PASSWORD REQUIREMENTS </h2>\n                  <div class=\"col-sm-12\">\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <label for=\"prefix\" style=\"margin-left: 5px;\">1. Minimum Password Length</label>\n                      <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"prefix\" size=\"2\" value=\"8\">\n                      <label for=\"prefix\" style=\"margin-left: 10px;color: #bb2205\">\n                        Passwords shall have a minimum of 8 characters with a mix of alphanumeric and\n                        special characters.\n                      </label>\n                    </form>\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <label for=\"prefix\" style=\"margin-left: 5px;\">2. Password Expiry Period</label>\n                      <input type=\"text\" style=\"margin-left: 48px;\" class=\"form-control\" id=\"prefix\" size=\"2\" value=\"180\">\n                      <label for=\"prefix\" style=\"margin-left: 10px; color: #bb2205\">\n                        Days (Example: 90, 120, 180 days. Default set to 180 days.)\n                      </label>\n                    </form>\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <label for=\"prefix\" style=\"margin-left: 5px;margin-top: 30px\">3. Password Complexity </label>\n                      <div class=\"card\" style=\"margin-left: 62px;width: 40rem;\">\n                        <div class=\"card-body\">\n                          <p class=\"card-text\">\n                            Include one UPPERCASE and one special character (!, %, @, #, and so on)\n                          </p>\n                          <p class=\"card-text\">\n                            * UPPERCASE and lowercase letter (A, z)\n                          </p>\n                          <p class=\"card-text\">\n                            * Numeric character (0-9)\n                          </p>\n                          <p class=\"card-text\">\n                            * Special character (!, %, @, #, and so on)\n                          </p>\n                        </div>\n                      </div>\n                    </form>\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <label for=\"prefix\" style=\"margin-left: 5px;\">4. Password History</label>\n                      <div class=\"card\" style=\"margin-left: 88px;\">\n                        <div class=\"card-body\" style=\"width: 40rem;\">\n                          Users will be prohibited from re-using the last 5 previously used passwords.\n                        </div>\n                      </div>\n                    </form>\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <label for=\"prefix\" style=\"margin-left: 5px;\">5. Password Restriction </label>\n                      <div class=\"card\" style=\"margin-left: 65px;\">\n                        <div class=\"card-body\" style=\"width: 40rem;\">\n                          Password cannot be the same as username.\n                        </div>\n                      </div>\n                    </form>\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <label for=\"prefix\" style=\"margin-left: 5px;\">6. Account lockout threshold  </label>\n                      <div class=\"card\" style=\"margin-left: 30px;\">\n                        <div class=\"card-body\" style=\"width: 40rem;\">\n                          5 Strikes – 5 wrong failed logins & user account is locked. Admin has to reset.\n                        </div>\n                      </div>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:20px;height:50px;width:120px;\">Save Policy</button>\n                    </form>\n\n\n\n\n                  </div>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lab Inventory</a>\n                <ng-template ngbNavContent>\n                  <h2 style=\"    margin-top: 20px;\n    text-align: center;\n    font-family: Playfair Display;\n    background-color: #f6f5f1;\n    color: red\">\n                    USER DEFINED FIELDS IN LAB INVENTORY\n                  </h2>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"field1\" style=\"margin-left: 115px;\">Field1</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field1\" size=\"30\">\n                    <label for=\"field2\" style=\"margin-left: 100px;\">Field2</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field2\" size=\"30\">\n\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"field3\" style=\"margin-left: 115px;\">Field3</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field3\" size=\"30\">\n                    <label for=\"field4\" style=\"margin-left: 100px;\">Field4</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field4\" size=\"30\">\n\n                  </form>\n                  <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                    <label for=\"field5\" style=\"margin-left: 115px;\">Field5</label>\n                    <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"field5\" size=\"30\">\n\n\n                  </form>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>System Maintenance</a>\n                <ng-template ngbNavContent>\n                  <h5 style=\" margin-left:250px;margin-top: 90px; font-family: Playfair Display;background-color: #f6f5f1;color:Highlight\"> Enter Password to access System Maintenance </h5>\n                  <div class=\"col-sm-12\">\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <input type=\"text\" style=\"margin-left: 290px;\" class=\"form-control\" id=\"prefix\" size=\"25\">\n                    </form>\n                    <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:310px;height:40px;width:100px;\">Login</button>\n                      <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:100px;\">Cancel</button>\n                    </form>\n\n                  </div>\n                </ng-template>\n              </ng-container>\n              <ng-container ngbNavItem>\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>SF Modules</a>\n                <ng-template ngbNavContent>\n                  <div class=\"card\" style=\"width:850px;height:250px;margin-left:90px;margin-top:40px;\">\n                    <div class=\"card-body\">\n                      <form>\n                        <div style=\"margin-left:80px; margin-top:20px;\">\n                          <mat-checkbox class=\"example-margin\">Cosmetics/Personal care</mat-checkbox><br />\n                          <mat-checkbox class=\"example-margin\">Nutrition/Supplements</mat-checkbox><br />\n                          <mat-checkbox class=\"example-margin\">Paints & Coatings</mat-checkbox><br />\n                          <mat-checkbox class=\"example-margin\" disabled>Food & Beverages</mat-checkbox>\n                          <span style=\"margin-left:10px;color:red;\">(This feature is not yet available)</span>\n                        </div>\n                      </form>\n                      <form>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:180px;height:40px;width:120px;margin-top:20px;\">Save</button>\n                      </form>\n                    </div>\n                  </div>\n\n                </ng-template>\n              </ng-container>\n\n            </nav>\n\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n            <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:800px;margin-bottom:40px;margin-top:30px; height:40px;width:80px;\">Save</button>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Regulatory</a>\n          <ng-template ngbNavContent>\n\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Formulations</a>\n          <ng-template ngbNavContent>\n            <nav ngbNav #nav=\"ngbNav\" class=\"nav-tabs \">\n              <!--<ng-container ngbNavItem style=\"margin-left:20px\">\n                <a class=\"tabcolor tabbutto tabrowli \" ngbNavLink>Lock Formulations</a>\n                <ng-template ngbNavContent>\n                  <p>data4</p>\n                </ng-template>\n              </ng-container>-->\n              <ng-container *ngTemplateOutlet=\"innerTabset\"></ng-container>\n              <ng-template #innerTabset class=\"nav-tabs\">\n                <ngb-tabset>\n                  <ngb-tab class=\"tabcolor tabbutto tabrowli \" title=\"Lock Formulations\">\n                    <ng-template ngbTabContent>\n                      <p style=\"margin-left:10px; margin-top:10px;\"><b> These are the Formula's you can lock as an Administrator </b></p>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Formula Code</label>\n                        <input type=\"text\" style=\"margin-left: 37px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"companyname\" size=\"65\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Formula Name</label>\n                        <input type=\"text\" style=\"margin-left: 30px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Name\" id=\"companyname\" size=\"65\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Project Name</label>\n                        <input type=\"text\" style=\"margin-left: 40px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Project Name\" id=\"companyname\" size=\"65\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">User Name</label>\n                        <input type=\"text\" style=\"margin-left: 55px; margin-top: 10px;\" class=\"form-control\" placeholder=\"User Name\" id=\"companyname\" size=\"65\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Clear</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Lock</button>\n                      </form>\n                      <div>\n                        <p style=\"margin-left:10px; margin-top:10px;\"><b>Double Click and Select a Formula From the grid below to Lock a Formula</b></p>\n                      </div>\n                      <div class=\"center\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:50px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">#</th>\n                              <th scope=\"col\">Formula Code</th>\n                              <th scope=\"col\">Formula Name</th>\n                              <th scope=\"col\">Project Name</th>\n                              <th scope=\"col\">User Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\">1</th>\n                              <td>Formula 1002.Ver 03</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 03</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>Admin</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">2</th>\n                              <td>Formula 1002.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>John</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">3</th>\n                              <td>Formula 1002.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 05</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>Admin</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">4</th>\n                              <td>Formula 1002.Ver 05</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 06</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>John</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">5</th>\n                              <td>Formula 1002.Ver 06</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 07</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>Admin</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">6</th>\n                              <td>Formula 1002.Ver 07</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 08</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>John</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div style=\"margin-left:520px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n\n\n\n                  <ngb-tab title=\"Unlock Formula(s)\">\n                    <ng-template ngbTabContent>\n                      <p style=\"margin-left:10px; margin-top:10px;\"><b> These are the Formula's you can Unlock as an Administrator </b></p>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Formula Code</label>\n                        <input type=\"text\" style=\"margin-left: 37px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"companyname\" size=\"65\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Formula Name</label>\n                        <input type=\"text\" style=\"margin-left: 30px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Formula Name\" id=\"companyname\" size=\"65\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">Project Name</label>\n                        <input type=\"text\" style=\"margin-left: 40px; margin-top: 10px;\" class=\"form-control\" placeholder=\"Project Name\" id=\"companyname\" size=\"65\">\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1\">\n                        <label for=\"company\" style=\"margin-left:25px;\">User Name</label>\n                        <input type=\"text\" style=\"margin-left: 55px; margin-top: 10px;\" class=\"form-control\" placeholder=\"User Name\" id=\"companyname\" size=\"65\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Clear</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">UnLock</button>\n                      </form>\n                      <div>\n                        <p style=\"margin-left:10px; margin-top:10px;\"><b>Double Click and Select a Formula From the grid below to UnLock a Formula</b></p>\n                      </div>\n                      <div class=\"center\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:50px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">#</th>\n                              <th scope=\"col\">Formula Code</th>\n                              <th scope=\"col\">Formula Name</th>\n                              <th scope=\"col\">Project Name</th>\n                              <th scope=\"col\">User Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\">1</th>\n                              <td>Formula 1002.Ver 03</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 03</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>Admin</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">2</th>\n                              <td>Formula 1002.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>John</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">3</th>\n                              <td>Formula 1002.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 05</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>Admin</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">4</th>\n                              <td>Formula 1002.Ver 05</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 06</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>John</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">5</th>\n                              <td>Formula 1002.Ver 06</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 07</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>Admin</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">6</th>\n                              <td>Formula 1002.Ver 07</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 08</td>\n                              <td>3-in-1 Ethnic Shampoo</td>\n                              <td>John</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                        <div style=\"margin-left:520px;\">\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                          <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                        </div>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Unlock Record(s)\">\n                    <ng-template ngbTabContent>\n                      <div style=\"margin-top:30px;\">\n                        <p><b>Select a Row and Click on the UnLock Record(These Formulas are being viewed bu another User</b></p>\n                      </div>\n                      <div class=\"center\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:80px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">#</th>\n                              <th scope=\"col\">Formula Code</th>\n                              <th scope=\"col\">Formula Name</th>\n                              <th scope=\"col\">Record Locked Time</th>\n                              <th scope=\"col\">Record Viewed By</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\">1</th>\n                              <td>Formula 1002.Ver 03</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 01</td>\n                              <td>11/25/2020 4:07:44 PM</td>\n                              <td>Lalu</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">2</th>\n                              <td>Formula 1002.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 04</td>\n                              <td>12/25/2020 4:07:44 PM</td>\n                              <td>John</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">3</th>\n                              <td>Formula 1002.Ver 04</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 05</td>\n                              <td>12/25/2021 5:07:44 PM</td>\n                              <td>Admin</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">4</th>\n                              <td>Formula 1002.Ver 05</td>\n                              <td>3-in-1 Ethnic Shampoo.Ver 08</td>\n                              <td>12/25/2020 4:07:44 PM</td>\n                              <td>John</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div style=\"margin-left:700px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:140px;\">UnLock All</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:150px;\">UnLock Record</button>\n                      </div>\n                      <div style=\"margin-left:510px;margin-top:40px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Delete product(s)\">\n                    <ng-template ngbTabContent>\n                      <div style=\"margin-top: 30px;margin-left: 20px;\">\n                        <p><b>These are the products you can DELETE as an administrator</b></p>\n                      </div>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"ph.no\" style=\"margin-left: 25px;\">Product</label>\n                        <input type=\"text\" style=\"margin-left: 60px;\" class=\"form-control\" placeholder=\"Product\" id=\"phoneno\" size=\"30\">\n                        <label for=\"fax\" style=\"margin-left:85px;\">Product Name</label>\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"fax\" name=\"Fax\" placeholder=\"Product Name\" size=\"30\" />\n                      </form>\n                      <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"email\" style=\"margin-left: 24px;\">Formula Code</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"phoneno\" size=\"30\">\n                        <label for=\"webaddress\" style=\"margin-left:82px;\">Formula Name</label>\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"webaddress\" name=\"web address\" placeholder=\"Formula Name\" size=\"30\" />\n                      </form>\n                      <div style=\"margin-left:300px;margin-top:30px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:140px;\">Delete</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:150px;\">Clear</button>\n                      </div>\n                      <div style=\"margin-top:15px;margin-left:20px;\">\n                        <p><b>Double click and select a product from the grid below to DELETE a product</b></p>\n                      </div>\n                      <div class=\"center\" style=\"overflow-x:auto;\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:50px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">#</th>\n                              <th scope=\"col\">Product #</th>\n                              <th scope=\"col\">Product Name</th>\n                              <th scope=\"col\">Product Date</th>\n                              <th scope=\"col\">Sample #</th>\n                              <th scope=\"col\">Formula # </th>\n                              <th scope=\"col\">Formuala Name</th>\n                              <th scope=\"col\">PDR #</th>\n                              <th scope=\"col\">Project Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\">1</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">2</th>\n                              <td>05115</td>\n                              <td>Charlie Brown</td>\n                              <td>05/16/13</td>\n                              <td>2013-2035</td>\n                              <td>CC-6034</td>\n                              <td>CC Fall-Dirty Blue</td>\n                              <td>6034</td>\n                              <td>CC Fall-Dirty Blue</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">3</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">4</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">5</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                              <td>Gly-Vak</td>\n                            </tr>\n\n\n\n                          </tbody>\n                        </table>\n                      </div>\n                      <div style=\"margin-left:510px;margin-top:40px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Delete Sample(s)\">\n                    <ng-template ngbTabContent>\n                      <div style=\"margin-top: 30px;margin-left: 20px;\">\n                        <p><b>These are the samples you can DELETE as an administrator</b></p>\n                      </div>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"ph.no\" style=\"margin-left: 25px;\">Sample Submission #</label>\n                        <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" placeholder=\"Sample Submission #\" id=\"phoneno\" size=\"30\">\n                        <label for=\"fax\" style=\"margin-left:75px;\">Customer Name</label>\n                        <input type=\"text\" style=\"margin-left:20px\" class=\"form-control\" id=\"fax\" name=\"Fax\" placeholder=\"Customer Name\" size=\"30\" />\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"email\" style=\"margin-left: 24px;\">Formula Code</label>\n                        <input type=\"text\" style=\"margin-left: 75px;\" class=\"form-control\" placeholder=\"Formula Code\" id=\"phoneno\" size=\"30\">\n                        <label for=\"webaddress\" style=\"margin-left:77px;\">Formula Name</label>\n                        <input type=\"text\" style=\"margin-left:30px\" class=\"form-control\" id=\"webaddress\" name=\"web address\" placeholder=\"Formula Name\" size=\"30\" />\n                      </form>\n                      <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 10px;\">\n                        <label for=\"email\" style=\"margin-left: 130px;\">PDR #</label>\n                        <input type=\"text\" style=\"margin-left: 28px;\" class=\"form-control\" placeholder=\"PDR #\" id=\"phoneno\" size=\"30\">\n                        <label for=\"webaddress\" style=\"margin-left:75px;\">Project Name</label>\n                        <input type=\"text\" style=\"margin-left:40px\" class=\"form-control\" id=\"webaddress\" name=\"web address\" placeholder=\"Project Name\" size=\"30\" />\n                      </form>\n                      <div style=\"margin-left:300px;margin-top:30px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:140px;\">Delete</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:150px;\">Clear</button>\n                      </div>\n                      <div style=\"margin-top:15px;margin-left:20px;\">\n                        <p><b>Double click and select a product from the grid below to DELETE a product</b></p>\n                      </div>\n                      <div class=\"center\" style=\"overflow-x:auto;\">\n                        <table class=\"table table-hover table-bordered\" style=\"margin-left:60px;\">\n                          <thead>\n                            <tr>\n                              <th scope=\"col\">#</th>\n                              <th scope=\"col\">Sample #</th>\n                              <th scope=\"col\">Sample Date</th>\n                              <th scope=\"col\">Formula Code</th>\n                              <th scope=\"col\">Formula Name </th>\n                              <th scope=\"col\">PDR # </th>\n                              <th scope=\"col\">Project Name</th>\n                              <th scope=\"col\">Customer Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\">1</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">2</th>\n                              <td>05115</td>\n                              <td>Charlie Brown</td>\n                              <td>05/16/13</td>\n                              <td>2013-2035</td>\n                              <td>CC-6034</td>\n                              <td>CC Fall-Dirty Blue</td>\n                              <td>6034</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">3</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">4</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n\n                            </tr>\n                            <tr>\n                              <th scope=\"row\">5</th>\n                              <td>0370000081340</td>\n                              <td>Celeste Gly-VAK</td>\n                              <td>09/24/11</td>\n                              <td>S2003</td>\n                              <td>Gly-Vak-1122</td>\n                              <td>Gly-Vak.Ver 02</td>\n                              <td>2011-1122</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div style=\"margin-left:510px;margin-top:40px;\">\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:400px;\" disabled>Encrypt all formulas and MRP batch tickets</button>\n                        <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Back</button>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n              </ng-template>\n            </nav>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Assign Users</a>\n          <ng-template ngbNavContent style=\"    background-color: #fffefc\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <label for=\"projectname\" style=\"margin-left: 15px;\">Project Name</label>\n                  <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 400px;margin-left: 20px;\">\n                    <option selected>Choose...</option>\n                    <option>Project name1</option>\n                    <option>Project name2</option>\n                    <option>Project name3</option>\n                    <option>Project name4</option>\n                    <option>Project name5</option>\n                  </select>\n                </form>\n                <label style=\"margin-left:40px\" for=\"Username\">User Name</label>\n\n                <div class=\"card\" style=\"margin-left: 30px;\">\n                  <div class=\"card-body\" style=\"width: 40rem;\">\n                    <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                    <label for=\"user1\">&nbsp; User1</label><br>\n                    <input type=\"checkbox\" id=\"user2\" name=\"user2\" value=\"User2\">\n                    <label for=\"user2\">&nbsp; User2</label><br>\n                    <input type=\"checkbox\" id=\"user3\" name=\"user3\" value=\"User3\">\n                    <label for=\"user3\">&nbsp; User3</label><br><br>\n\n                  </div>\n                </div>\n\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                </form>\n              </div>\n              <div class=\"col-sm-6\">\n                <label for=\"workflow\" style=\"color:firebrick\">Workflow tasks for this project</label><br>\n                <div style=\"    overflow-x: auto;overflow-y: auto; height: 510px;\">\n                  <table class=\"table table-hover table-bordered\" style=\"margin-left:10px;\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\" style=\"width: 1%;\">Assign</th>\n                        <th scope=\"col\" style=\"width: 1%;\">no</th>\n                        <th scope=\"col\" style=\"width: 94%;\">Task</th>\n                        <th scope=\"col\" style=\"width: 4%;\">Email Alert</th>\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"> <input type=\"checkbox\" id=\"pdrcreation\" name=\"pdrcreation\" value=\"Pdrcreation\"></th>\n\n                        <td>1</td>\n                        <td>PDR Creation</td>\n                        <td><input type=\"checkbox\" id=\"pdr_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pdrapproval\" name=\"pdrapproval\" value=\"Pdrapproval\"></th>\n                        <td>2</td>\n                        <td>PDR Approval</td>\n                        <td><input type=\"checkbox\" id=\"pdr_approval\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formulacreation\" name=\"formulacreation\" value=\"Formulacreation\"></th>\n                        <td>3</td>\n                        <td>Formula Creation</td>\n                        <td><input type=\"checkbox\" id=\"Formula_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"qctestapprovals\" name=\"qctestapprovals\" value=\"Qctestapprovals\"></th>\n                        <td>4</td>\n                        <td>QC Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"producttestingapprovals\" name=\"producttestingapprovals\" value=\"Producttestingapprovals\"></th>\n                        <td>5</td>\n                        <td>Product Testing Approvals</td>\n                        <td><input type=\"checkbox\" id=\"product_testing_approvals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"stabilitytestapprovals\" name=\"stabilitytestapprovals\" value=\"Stabilitytestapprovals\"></th>\n                        <td>6</td>\n                        <td>Stability Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"stabilitytestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"coaapprovals\" name=\"coaapprovals\" value=\"Coaapprovals\"></th>\n                        <td>7</td>\n                        <td>COA Approvals</td>\n                        <td><input type=\"checkbox\" id=\"coaapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"regulatoryapprej\" name=\"regulatoryapprej\" value=\"Regulatoryapprej\"></th>\n                        <td>8</td>\n                        <td>Regulatory Approvals/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"regulatoryapprej\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"ilapproval\" name=\"ilapproval\" value=\"Ilapproval\"></th>\n                        <td>9</td>\n                        <td>IL (Label) Approval</td>\n                        <td><input type=\"checkbox\" id=\"ilapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formprocedapproval\" name=\"formprocedapproval\" value=\"Formprocedapproval\"></th>\n                        <td>10</td>\n                        <td>Formula Procedure Approval</td>\n                        <td><input type=\"checkbox\" id=\"formprocedapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formapprej\" name=\"formapprej\" value=\"Formapprej\"></th>\n                        <td>11</td>\n                        <td>Formula Arrpoval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"formapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"samplecreation\" name=\"samplecreation\" value=\"Samplecreation\"></th>\n                        <td>12</td>\n                        <td>Sample Creation</td>\n                        <td><input type=\"checkbox\" id=\"samplecreation\"></td>\n\n\n                      </tr>\n\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"sampapprej\" name=\"sampapprej\" value=\"sampapprej\"></th>\n                        <td>13</td>\n                        <td>Sample Approval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"sampapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productization\" name=\"productization\" value=\"Productization\"></th>\n                        <td>14</td>\n                        <td>Productization(to scale up & manufacture)</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pccapproval\" name=\"pccapproval\" value=\"Pccapproval\"></th>\n                        <td>15</td>\n                        <td>PCC Approval</td>\n                        <td><input type=\"checkbox\" id=\"pccapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pifapproval\" name=\"pifapproval\" value=\"Pifapproval\"></th>\n                        <td>16</td>\n                        <td>PIF Approval</td>\n                        <td><input type=\"checkbox\" id=\"pifapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productapproval\" name=\"productapproval\" value=\"Productapproval\"></th>\n                        <td>6</td>\n                        <td>Product Approval</td>\n                        <td><input type=\"checkbox\" id=\"product_approval\"></td>\n\n\n                      </tr>\n\n\n\n                    </tbody>\n                  </table>\n                </div>\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:70px;\">Save </button>\n\n\n                </form>\n\n              </div>\n\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Assign Projects</a>\n          <ng-template ngbNavContent>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <label for=\"username\" style=\"margin-left: 15px;\">User Name</label>\n                  <select id=\"Assigned_to\" class=\"form-control\" style=\"width: 400px;margin-left: 20px;\">\n                    <option selected>Choose...</option>\n                    <option>user name1</option>\n                    <option>user name2</option>\n                    <option>user name3</option>\n                    <option>user name4</option>\n                    <option>user name5</option>\n                  </select>\n                </form>\n                <label style=\"margin-left:40px\" for=\"Projectname\">Project Name</label>\n\n                <div class=\"card\" style=\"margin-left: 30px;\">\n                  <div class=\"card-body\" style=\"width: 40rem;\">\n                    <input type=\"checkbox\" id=\"project1\" name=\"project1\" value=\"Project1\">\n                    <label for=\"project1\">&nbsp; Project1</label><br>\n                    <input type=\"checkbox\" id=\"project2\" name=\"user2\" value=\"Project2\">\n                    <label for=\"project2\">&nbsp; Project2</label><br>\n                    <input type=\"checkbox\" id=\"project3\" name=\"project3\" value=\"Project3\">\n                    <label for=\"project3\">&nbsp; Project3</label><br><br>\n                  </div>\n                </div>\n\n\n\n\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                </form>\n              </div>\n              <div class=\"col-sm-6\">\n                <label for=\"workflow\" style=\"color:firebrick\">Workflow tasks for this project</label><br>\n                <div style=\"    overflow-x: auto;overflow-y: auto; height: 510px;\">\n                  <table class=\"table table-hover table-bordered\" style=\"margin-left:10px;\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\" style=\"width: 1%;\">Assign</th>\n                        <th scope=\"col\" style=\"width: 1%;\">no</th>\n                        <th scope=\"col\" style=\"width: 94%;\">Task</th>\n                        <th scope=\"col\" style=\"width: 4%;\">Email Alert</th>\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"> <input type=\"checkbox\" id=\"pdrcreation\" name=\"pdrcreation\" value=\"Pdrcreation\"></th>\n\n                        <td>1</td>\n                        <td>PDR Creation</td>\n                        <td><input type=\"checkbox\" id=\"pdr_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pdrapproval\" name=\"pdrapproval\" value=\"Pdrapproval\"></th>\n                        <td>2</td>\n                        <td>PDR Approval</td>\n                        <td><input type=\"checkbox\" id=\"pdr_approval\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formulacreation\" name=\"formulacreation\" value=\"Formulacreation\"></th>\n                        <td>3</td>\n                        <td>Formula Creation</td>\n                        <td><input type=\"checkbox\" id=\"Formula_creation\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"qctestapprovals\" name=\"qctestapprovals\" value=\"Qctestapprovals\"></th>\n                        <td>4</td>\n                        <td>QC Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"producttestingapprovals\" name=\"producttestingapprovals\" value=\"Producttestingapprovals\"></th>\n                        <td>5</td>\n                        <td>Product Testing Approvals</td>\n                        <td><input type=\"checkbox\" id=\"product_testing_approvals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"stabilitytestapprovals\" name=\"stabilitytestapprovals\" value=\"Stabilitytestapprovals\"></th>\n                        <td>6</td>\n                        <td>Stability Test Approvals</td>\n                        <td><input type=\"checkbox\" id=\"stabilitytestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"coaapprovals\" name=\"coaapprovals\" value=\"Coaapprovals\"></th>\n                        <td>7</td>\n                        <td>COA Approvals</td>\n                        <td><input type=\"checkbox\" id=\"coaapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"regulatoryapprej\" name=\"regulatoryapprej\" value=\"Regulatoryapprej\"></th>\n                        <td>8</td>\n                        <td>Regulatory Approvals/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"regulatoryapprej\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"ilapproval\" name=\"ilapproval\" value=\"Ilapproval\"></th>\n                        <td>9</td>\n                        <td>IL (Label) Approval</td>\n                        <td><input type=\"checkbox\" id=\"ilapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formprocedapproval\" name=\"formprocedapproval\" value=\"Formprocedapproval\"></th>\n                        <td>10</td>\n                        <td>Formula Procedure Approval</td>\n                        <td><input type=\"checkbox\" id=\"formprocedapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"formapprej\" name=\"formapprej\" value=\"Formapprej\"></th>\n                        <td>11</td>\n                        <td>Formula Arrpoval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"formapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"samplecreation\" name=\"samplecreation\" value=\"Samplecreation\"></th>\n                        <td>12</td>\n                        <td>Sample Creation</td>\n                        <td><input type=\"checkbox\" id=\"samplecreation\"></td>\n\n\n                      </tr>\n\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"sampapprej\" name=\"sampapprej\" value=\"sampapprej\"></th>\n                        <td>13</td>\n                        <td>Sample Approval/Rejection</td>\n                        <td><input type=\"checkbox\" id=\"sampapprej\"></td>\n\n\n                      </tr>\n                      <tr style=\"background-color:aqua\">\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productization\" name=\"productization\" value=\"Productization\"></th>\n                        <td>14</td>\n                        <td>Productization(to scale up & manufacture)</td>\n                        <td><input type=\"checkbox\" id=\"qctestapprovals\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pccapproval\" name=\"pccapproval\" value=\"Pccapproval\"></th>\n                        <td>15</td>\n                        <td>PCC Approval</td>\n                        <td><input type=\"checkbox\" id=\"pccapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"pifapproval\" name=\"pifapproval\" value=\"Pifapproval\"></th>\n                        <td>16</td>\n                        <td>PIF Approval</td>\n                        <td><input type=\"checkbox\" id=\"pifapproval\"></td>\n\n\n                      </tr>\n                      <tr>\n                        <th scope=\"row\"><input type=\"checkbox\" id=\"productapproval\" name=\"productapproval\" value=\"Productapproval\"></th>\n                        <td>6</td>\n                        <td>Product Approval</td>\n                        <td><input type=\"checkbox\" id=\"product_approval\"></td>\n\n\n                      </tr>\n\n\n\n                    </tbody>\n                  </table>\n                </div>\n                <form class=\"form-inline\" style=\"   margin-top: 30px;margin-bottom:20px\">\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:100px;\">Select All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Deselect All </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:70px;\">Save </button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:130px;\">Print Preview </button>\n                </form>\n\n              </div>\n\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Sr.Mgmt Approvers</a>\n          <ng-template ngbNavContent>\n            <label for=\"manageapplist \" style=\"margin-left:20px\">Select those who are in the Senior Management Approver List</label><br>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"card\" style=\"margin-left: 30px;\">\n                  <div class=\"card-body\" style=\"width: 40rem;\">\n                    <input type=\"checkbox\" id=\"user1\" name=\"user1\" value=\"User1\">\n                    <label for=\"user1\">&nbsp; User1</label><br>\n                    <input type=\"checkbox\" id=\"user2\" name=\"user2\" value=\"User2\">\n                    <label for=\"user2\">&nbsp; User2</label><br>\n                    <input type=\"checkbox\" id=\"user3\" name=\"user3\" value=\"User3\">\n                    <label for=\"user3\">&nbsp; User3</label><br><br>\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\" style=\"position: absolute; left: 50%;bottom: 1%; \">\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:110px;\">Select All </button>\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:130px;\">Deselect All </button>\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left:10px;height:50px;width:70px;\">save</button>\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Default Report</a>\n          <ng-template ngbNavContent>\n            <div style=\"height:300px\">\n              <h4 style=\"text-align:center;margin-top:40px;margin-left:30px;\"><b>Default Formula Format Settings</b></h4>\n              <form class=\"form-inline\" style=\" background-color: #f6f5f1;margin-top: 40px;\">\n                <label for=\"companylogo\" style=\"margin-left: 295px;\">Default Formula Print Preview Format (1-16)</label>\n                <input type=\"text\" style=\"margin-left: 40px;\" class=\"form-control\" id=\"PDR\" size=\"10\" value=\"11\"><br />\n                <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:30px;height:40px;width:80px;\">Save</button>\n              </form>\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Mail Setup</a>\n          <ng-template ngbNavContent>\n            <label class=\"form-check-label\" for=\"invalidCheck\" style=\"margin-left:20px;margin-top:10px;\">\n              Configure SMTP Server Settings\n            </label>\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck\" required style=\"    margin-left: 30px;margin-top: 16px;\">\n            <p style=\"color: red;margin-top: 10px;margin-left: 20px;\">(For Email notification upon approvals)</p>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">Outgoing Mail Server</label>\n              <input type=\"text\" style=\"margin-left: 40px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Clear</button>\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">Outgoing Email Address</label>\n              <input type=\"text\" style=\"margin-left: 20px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">Password</label>\n              <input type=\"text\" style=\"margin-left: 120px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\n            </form>\n            <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n              <label for=\"companylogo\" style=\"margin-left: 25px;\">SMTP Server port</label>\n              <input type=\"text\" style=\"margin-left: 68px;\" class=\"form-control\" id=\"PDR\" size=\"50\">\n            </form>\n            <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 30px;\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:250px;height:40px;width:120px;\">Test Settings</button>\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:80px;\">Save</button>\n            </form>\n            <form class=\"form-inline\" style=\"background-color: #f6f5f1;margin-top: 30px;\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:990px;height:40px;width:80px;\">Back</button>\n            </form>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto tabrowli\" ngbNavLink>Active Users</a>\n          <ng-template ngbNavContent>\n            <div style=\"height:500px\">\n              <p><b>Select a Row to Force Log Out</b></p>\n              <table class=\"table table-hover table-bordered fixed\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Logout User</th>\n                    <th scope=\"col\">Username</th>\n                    <th scope=\"col\">First Name</th>\n                    <th scope=\"col\">User Group</th>\n                    <th scope=\"col\">System Name</th>\n                    <th scope=\"col\">MAC Address</th>\n                    <th scope=\"col\">IP</th>\n                    <th scope=\"col\">Logged In Time</th>\n                    <th scope=\"col\">SF Front End Version</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">\n                      <button type=\"button\" class=\"btn btn-primary\">Logout</button>\n                    </th>\n                    <td>Lalu</td>\n                    <td>Lalu</td>\n                    <td>Administrator</td>\n                    <td>SFUS1</td>\n                    <td>00-24-E8-57-2F-68</td>\n                    <td>24.187.220.62</td>\n                    <td>Jan 5 2021 4:22 PM</td>\n                    <td>SMARTFormulator Ver 8.0.12.05.20</td>\n                  </tr>\n                </tbody>\n              </table>\n              <div>\n\n                <form class=\"form-inline\" style=\"    background-color: #f6f5f1;margin-top: 10px;\">\n                  <!--<label for=\"prefixdescription\" style=\"margin-left: 60px;\">Current Active User: 1</label>-->\n                  <h6><b>Current Active User: 1</b></h6>\n\n\n\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:680px;height:40px;width:120px;\">Refresh</button>\n                  <button type=\"submit\" class=\"btn btn-primary buttoncolor \" style=\"margin-left:10px;height:40px;width:120px;\">Logout</button>\n                </form>\n\n\n\n\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n\n      </nav>\n\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n    </div>\n  </div>\n</div>\n<div class=\"card\" style=\"margin-top:25px;\">\n  <div class=\"card-body\" style=\"color:blue;text-align:center\">\n    SMARTFormulator LLC, Copyright &#169; 2009-2020. All Rights Reserved\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>-->\r\n<div>\r\n  <div class=\"basic-container\">\r\n    <div style=\" background-color: black;\" class=\"menu-bar mat-elevation-z1 \">\r\n      <mat-toolbar style=\"    background-color: #F7EFE5;\r\n    height: 70px;\r\n    color: white\">\r\n        <mat-toolbar-row style=\"margin-top:10px\">\r\n          <button mat-icon-button>\r\n            <mat-icon style=\"color: #214252\" (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n          </button>\r\n          <img src=\"../assets/SMARTFORMULATOR.jpg \" height=\"30\" width=\"30\" />\r\n          <h1 style=\"font-family: Playfair Display; font-size:20px;color:  #150485\">SMART </h1>\r\n          <h1 style=\"margin-right:30px;  font-family: Playfair Display;font-size:20px; color: firebrick\"> Formulator</h1>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <span *ngFor=\"let item of navItems\">\r\n            <!-- Handle branch node buttons here -->\r\n            <span *ngIf=\"item.children && item.children.length > 0\">\r\n\r\n              <button mat-button #menuTrigger=\"matMenuTrigger\"\r\n                      [matMenuTriggerFor]=\"menu.childMenu\"\r\n                      [disabled]=\"item.disabled\" style=\" color:black;overflow-wrap:break-word\">\r\n                {{item.displayName}}\r\n              </button>\r\n              <app-menu-item #menu [items]=\"item.children\"></app-menu-item>\r\n            </span>\r\n\r\n            <!-- Leaf node buttons here -->\r\n            <span *ngIf=\"!item.children || item.children.length === 0\">\r\n\r\n              <button mat-button [routerLink]=\"item.route\">\r\n                {{item.displayName}}\r\n              </button>\r\n\r\n            </span>\r\n\r\n          </span>\r\n          <div class=\"icon\">\r\n            <mat-icon [inline]=\"true\" mat-button [matMenuTriggerFor]=\"menu\" style=\"color: #214252;margin-left:390px;height:40dp;width:50dp\">settings</mat-icon>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item [routerLink]=\"'/AdminWork'\">Admin Work</button>\r\n              <button mat-menu-item>User Security</button>\r\n              <button mat-menu-item>Lab Inventory</button>\r\n            </mat-menu>\r\n            </div>\r\n          <div class=\"icon\">\r\n            <mat-icon [inline]=\"true\" mat-button [matMenuTriggerFor]=\"menu1\" style=\"color: #214252;margin-left:30px\">account_circle</mat-icon>\r\n          \r\n            <mat-menu #menu1=\"matMenu\">\r\n              <button mat-menu-item>My Task List</button>\r\n              <button mat-menu-item>Change Password</button>\r\n              <button mat-menu-item>Logout</button>\r\n            </mat-menu>\r\n          </div>\r\n        </mat-toolbar-row>\r\n\r\n     <style>\r\n       .icon {\r\n         font-size: 27px;\r\n       }\r\n     </style>\r\n\r\n\r\n\r\n      </mat-toolbar>\r\n    </div>\r\n  </div>  \r\n  <div style=\"height:83vh;\">\r\n\r\n\r\n\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div style=\"    background-color: #bbe1fa;\">\n\n  <div style=\"    background-color: #bbe1fa\n\">\n\n    <h1 class=\"design \" style=\"    font-family: Playfair Display;\r\n    background-color: #bbe1fa;\r\n    color: #ffff;\r\n    text-align: center\" >\n      SmartFormulator-Formula Listing\n    </h1>\n\n\n\n\n    <div class=\" container\"style=\"   background-color: #bbe1fa;\" >\n\n    <div class=\"center\" style=\"   background-color: #bbe1fa;\">\n\n      <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n        <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n        <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n        <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n      </form>\n\n\n      <form class=\"form-inline\">\n\n\n        <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n\n        <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n          <option selected>Select Project Name</option>\n          <option>Admin</option>\n          <option>Admin1</option>\n          <option>Admin2</option>\n          <option>Admin3</option>\n          <option>Admin4</option>\n        </select>\n\n      </form>\n      <form class=\"form-inline\">\n\n\n\n        <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n          <option selected>Status</option>\n          <option>Admin</option>\n          <option>Admin1</option>\n          <option>Admin2</option>\n          <option>Admin3</option>\n          <option>Admin4</option>\n        </select>\n\n\n\n\n        <select id=\"Created_by\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:15px\">\n          <option selected>Created By</option>\n          <option>Admin</option>\n          <option>Admin1</option>\n          <option>Admin2</option>\n          <option>Admin3</option>\n          <option>Admin4</option>\n        </select>\n\n      </form>\n\n\n      <!--<div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n        <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  FormulaCode </th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.FormulaCode}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Description </th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.Description}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> PDRNo</th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.PDRNo}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> UserName</th>\n        <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.UserName}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef>ProjectName</th>\n            <td mat-cell *matCellDef=\"let data\"> {​​​​​​​{​​​​​​​data.ProjectName}​​​​​​​}​​​​​​​ </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>-->\n      <!--</div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>My Formula</a>\n        <ng-template ngbNavContent>\n          <div style=\"    background-color: #bbe1fa;\">\n            <label for=\"search\" style=\"margin-left: 100px;\">search</label>\n            <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n            </form>\n\n\n            <form class=\"form-inline\">\n\n\n              <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n              <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n                <option selected>Select Project Name</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n            </form>\n            <form class=\"form-inline\">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n                <option selected>Status</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n\n\n\n\n            </form>\n\n\n\n            <div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n              <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  Formula Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.name}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> PDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.weight}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Project Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.symbol}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> Created By</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.createdby}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.date}​​​​​​​}​​​​​​​ </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>-->\n      <!--</div>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Products</a>\n        <ng-template ngbNavContent>\n\n\n\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Company Owned</a>\n        <ng-template ngbNavContent>\n          <div style=\"    background-color: #bbe1fa;\">\n            <label for=\"search\" style=\"margin-left: 100px;\">search</label>\n            <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n\n\n            </form>\n\n\n            <form class=\"form-inline\">\n\n\n              <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n              <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n                <option selected>Select Project Name</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n            </form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <form class=\"form-inline\">\n\n\n\n              <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n                <option selected>Status</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n\n\n              <select id=\"Created_by\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:15px\">\n                <option selected>Created By</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n            </form>\n\n\n\n            <div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n              <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  Formula Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.name}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> PDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.weight}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Project Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.symbol}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> Created By</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.createdby}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n                  <th mat-header-cell *matHeaderCellDef> Date</th>\n                  <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.date}​​​​​​​}​​​​​​​ </td>\n                </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n            </div>\n          </div>\n        </ng-template>\n\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Customer Owned</a>\n        <ng-template ngbNavContent>\n          <p>data5</p>\n        </ng-template>\n      </ng-container>\n      <ng-container ngbNavItem>\n        <a class=\"tabcolor tabbutto\" ngbNavLink>Generic</a>\n        <ng-template ngbNavContent>\n          <div style=\"    background-color: #bbe1fa;\">\n            <label for=\"search\" style=\"margin-left: 100px;\">search</label>\n            <form class=\"form-inline\" style=\"background-color: #bbe1fa;\">\n\n\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 90px;\" class=\"form-control\" placeholder=\"Enter Formula Code\" id=\"formulacode\" size=\"40\">\n              <input type=\"text\" (keyup)=\"applyFilter($event)\" style=\"margin-left: 70px\" class=\" form-control\" placeholder=\"Enter Formula Name\" id=\"formula_name\" size=\"40\">\n              <button type=\"submit\" class=\"btn btn-primary buttoncolor\" style=\"margin-left: 10px; height: 50px; width: 90px;\">Clear</button>\n            </form>\n\n\n            <form class=\"form-inline\">\n\n\n              <input type=\"text\" style=\"margin-top:10px;margin-left:90px;\" class=\"form-control\" placeholder=\"Enter PDR\" id=\"formula_pdr\" size=\"40\">\n\n\n\n\n              <select id=\"project_name\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:10px\">\n                <option selected>Select Project Name</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n            </form>\n            <form class=\"form-inline\">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              <select id=\"status\" class=\"form-control\" style=\"width:370px;margin-left:90px;margin-top:15px\">\n                <option selected>Status</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n\n\n\n              <select id=\"Created_by\" class=\"form-control\" style=\"width:370px;margin-left:70px;margin-top:15px\">\n                <option selected>Created By</option>\n                <option>Admin</option>\n                <option>Admin1</option>\n                <option>Admin2</option>\n                <option>Admin3</option>\n                <option>Admin4</option>\n              </select>\n\n            </form>\n\n\n\n            <div class=\"example-container mat-elevation-z8\" style=\"margin-top:20px\">\n              <table mat-table [dataSource]=\"dataSource\">-->\n      <!-- Position Column -->\n      <!--<ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> Formula </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.position}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Name Column -->\n      <!--<ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>  Formula Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.name}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Weight Column -->\n      <!--<ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> PDR </th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.weight}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Project Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.symbol}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.status}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"createdby\">\n        <th mat-header-cell *matHeaderCellDef> Created By</th>\n        <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.createdby}​​​​​​​}​​​​​​​ </td>\n      </ng-container>-->\n      <!-- Symbol Column -->\n      <!--<ng-container matColumnDef=\"date\">\n                    <th mat-header-cell *matHeaderCellDef> Date</th>\n                    <td mat-cell *matCellDef=\"let element\"> {​​​​​​​{​​​​​​​element.date}​​​​​​​}​​​​​​​ </td>\n                  </ng-container>\n\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" ng-click=\"\"> </tr>\n                </table>\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto\" ngbNavLink>LabNotebook</a>\n          <ng-template ngbNavContent>\n            <form>\n            </form>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto\" ngbNavLink>Customer</a>\n          <ng-template ngbNavContent>\n            <p>data8</p>\n          </ng-template>\n        </ng-container>\n        <ng-container ngbNavItem>\n          <a class=\"tabcolor tabbutto\" ngbNavLink>Stability</a>\n          <ng-template ngbNavContent>\n            <p>data2</p>\n          </ng-template>\n        </ng-container>\n\n\n      </nav>\n\n\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n      <div class=\"form-row\" style=\"    background-color: #bbe1fa;\">\n        <div style=\"margin-left:20px;margin-top:20px\" class=\"form-group \">\n          <div class=\"form-inline\">\n\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">New</button>\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:130px;\">Create Report</button>\n            <button type=\"submit\" class=\"btn btn-primary  buttoncolor\" style=\"margin-left:30px;height:50px;width:100px;\">Back</button>\n\n\n\n\n\n          </div>\n        </div>-->\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n<!--<ng-container *ngFor=\"let menuItem of modulesList\">\r\n\r\n  <ng-container *ngIf=\"!menuItem.children\">\r\n    <a class=\"nav-link\">\r\n      <span class=\"icon fa\" [ngClass]=\"menuItem.icon\"></span>\r\n      <span class=\"text-holder\">{{menuItem.label}}</span>\r\n    </a>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"menuItem.children.length > 0\">\r\n    <button mat-button [matMenuTriggerFor]=\"levelOne\" #levelOneTrigger=\"matMenuTrigger\" (mouseenter)=\"levelOneTrigger.openMenu()\">\r\n      <span class=\"icon fa\" [ngClass]=\"menuItem.icon\"></span>\r\n      <span>\r\n        {{menuItem.label}}\r\n        <i class=\"fa fa-chevron-down\"></i>\r\n      </span>\r\n    </button>\r\n\r\n    <mat-menu #levelOne=\"matMenu\" direction=\"down\" yPosition=\"below\">\r\n      <span (mouseleave)=\"levelOneTrigger.closeMenu()\">\r\n        <ng-container *ngFor=\"let childL1 of menuItem.children\">\r\n          <li class=\"p-0\" *ngIf=\"!childL1.children\" mat-menu-item>\r\n            <a class=\"nav-link\">\r\n              {{childL1.label}}\r\n              <i *ngIf=\"childL1.icon\" [ngClass]=\"childL1.icon\"></i>\r\n            </a>\r\n          </li>\r\n          <ng-container *ngIf=\"childL1.children && childL1.children.length > 0\">\r\n            <li mat-menu-item [matMenuTriggerFor]=\"levelTwo\">\r\n              <span class=\"icon fa\" [ngClass]=\"childL1.icon\"></span>\r\n              <span>{{childL1.label}}</span>\r\n            </li>\r\n\r\n            <mat-menu #levelTwo=\"matMenu\">\r\n              <ng-container *ngFor=\"let childL2 of childL1.children\">\r\n                <li class=\"p-0\" mat-menu-item>\r\n                  <a class=\"nav-link\">\r\n                    {{childL2.label}}\r\n                    <i *ngIf=\"childL2.icon\" [ngClass]=\"childL2.icon\"></i>\r\n                  </a>\r\n                </li>\r\n              </ng-container>\r\n            </mat-menu>\r\n          </ng-container>\r\n        </ng-container>\r\n      </span>\r\n    </mat-menu>\r\n  </ng-container>\r\n\r\n</ng-container>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-item/menu-item.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-item/menu-item.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\r\n  <span *ngFor=\"let child of items\">\r\n    <!-- Handle branch node menu items -->\r\n    <span *ngIf=\"child.children && child.children.length > 0\">\r\n      <button mat-menu-item color=\"primary\"  [matMenuTriggerFor]=\"menu.childMenu\"style=\"height:40px;\" >\r\n       \r\n          <mat-icon>{{child.iconName}}</mat-icon>\r\n          <span>{{child.displayName}}</span>\r\n         \r\n      </button>\r\n      <app-menu-item #menu [items]=\"child.children\"></app-menu-item>\r\n    </span>\r\n    \r\n    <!-- Handle leaf node menu items -->\r\n    <span *ngIf=\"!child.children || child.children.length === 0\"  >\r\n      <button  mat-menu-item [routerLink]=\"child.route\" style= \"height:35px\">\r\n        <mat-icon>{{child.iconName}}</mat-icon>\r\n        <span style=\"margin-top:1px\">{{child.displayName}}</span>\r\n      </button>\r\n    </span>\r\n  </span>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">redesign</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-work/admin-work.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-work/admin-work.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\n  padding: 20px;\n  text-align: left;\n  font-family: Haettenschweiler\n}\n\nh2.design {\n  text-align: center;\n  font: 20px;\n  font-family: 'Arial Rounded MT';\n  padding-top: 40px;\n  padding-bottom: 30px;\n}\n\n.textalign1 {\n}\n\n.mat-tab-group {\n  margin-bottom: 48px;\n}\n\n.tabcolor {\n  color: #bb2205;\n}\n\n.tabbutto:hover {\n  background-color: whitesmoke;\n  color: dimgrey;\n}\n\n.example-h2 {\n  margin: 10px;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\nul, li {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.listWrapper {\n  max-height: 180px;\n  max-width: 250px;\n  overflow: auto;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n\n.buttoncolor {\n  border-color: #214252;\n  background-color: #214252;\n}\n\n.tab-close {\n  color: lightseagreen;\n  text-align: right;\n  cursor: pointer;\n}\n\n.tabrowli {\n  text-align: center;\n  margin: 2px;\n  padding: 10px;\n  border: 1px solid #AAA;\n  background: #ECECEC;\n  display: inline-block;\n}\n\n.button {\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4td29yay9hZG1pbi13b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi13b3JrL2FkbWluLXdvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAudGVzdCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBIYWV0dGVuc2Nod2VpbGVyXG59XG5cbmgyLmRlc2lnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCBSb3VuZGVkIE1UJztcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4udGV4dGFsaWduMSB7XG59XG5cbi5tYXQtdGFiLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuLnRhYmNvbG9yIHtcbiAgY29sb3I6ICNiYjIyMDU7XG59XG5cbi50YWJidXR0bzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiBkaW1ncmV5O1xufVxuXG4uZXhhbXBsZS1oMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbnVsLCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxpc3RXcmFwcGVyIHtcbiAgbWF4LWhlaWdodDogMTgwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmJ1dHRvbmNvbG9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjE0MjUyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE0MjUyO1xufVxuXG4udGFiLWNsb3NlIHtcbiAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJyb3dsaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQUE7XG4gIGJhY2tncm91bmQ6ICNFQ0VDRUM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/admin-work/admin-work.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-work/admin-work.component.ts ***!
  \****************************************************/
/*! exports provided: AdminWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWorkComponent", function() { return AdminWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AdminWorkComponent = class AdminWorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminWorkComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-work',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-work/admin-work.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-work.component.css */ "./src/app/admin-work/admin-work.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AdminWorkComponent);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AppComponent = class AppComponent {
    constructor() {
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"];
        this.navItems = [
            {
                displayName: 'Projects/PDR',
                iconName: 'close',
                children: [
                    {
                        displayName: 'General',
                        iconName: 'speaker_notes',
                        route: 'counter'
                    },
                    {
                        displayName: 'Requirements',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Product Dev.Brief',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Assigning Users',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: '21 CFR Part 11 Approvers List',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Stage Gate Settings',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Documents',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Assigned Formulas',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Products',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Change Requests',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Customer Communications',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Specifications',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    },
                    {
                        displayName: 'Audit Tracking',
                        iconName: 'speaker_notes',
                        route: 'feedback'
                    }
                ]
            },
            {
                displayName: ' Formulation',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Formula Listing',
                        iconName: 'speaker_notes',
                        children: [
                            {
                                displayName: 'All Listing',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'My Formulas',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Products',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Company Owned',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Customer Owned',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Generic',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'LabNoteBook',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'By Customer',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Stability',
                                iconName: 'speaker_notes',
                                children: [
                                    {
                                        displayName: 'Stab Listing',
                                        iconName: 'speaker_notes',
                                    },
                                    {
                                        displayName: 'Daily Testing Schedule',
                                        iconName: 'speaker_notes',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        displayName: 'Formula Lookup',
                        iconName: 'speaker_notes',
                        children: [
                            {
                                displayName: 'General',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Formula',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Scalability Factor',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'QC',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Phy.Stability',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Product Testing',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Regulatory',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'IL/QIL',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Formula Specs',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Marketing Artifects',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Formula Notes',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: ' /Lab Batches',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'COA',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Workflow',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Product(s)',
                                iconName: 'speaker_notes',
                            },
                            {
                                displayName: 'Audit Tracking',
                                iconName: 'speaker_notes',
                            },
                        ]
                    },
                ]
            },
            {
                displayName: 'Sample Management',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Sample Management',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Customer Details',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'PDR Listing',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'PDR Listing by Date',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Disclaimers',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Documents',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Document Audit Tracking',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Audit Tracking',
                        iconName: 'speaker_notes',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'Productization',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Product',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Label',
                        iconName: 'speaker_notes',
                    },
                    {
                        displayName: 'Packaging',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'ArtWork',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Bulk/',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Prod.Regn Approvals',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Prod.Technical Data Specs',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Commerialization Checklist',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'PIF',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'CMO',
                        iconName: 'speaker_notes',
                        route: ''
                    },
                    {
                        displayName: 'Audit',
                        iconName: 'speaker_notes',
                        route: ''
                    }
                ]
            },
            {
                displayName: 'more',
                iconName: 'close',
                children: [
                    {
                        displayName: 'Raw Materials',
                        iconName: 'speaker_notes',
                    }
                ]
            }
        ];
        this.isExpanded = false;
    }
    ngOnInit() {
        this.recheckIfInMenu = false;
    }
    openResourceMenu() {
        this.trigger.openMenu();
    }
    closeResourceMenu() {
        setTimeout(() => {
            if (this.recheckIfInMenu === false) {
                this.trigger.closeMenu();
            }
        }, 175);
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
], AppComponent.prototype, "trigger", void 0);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/menu-item/menu-item.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _admin_work_admin_work_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-work/admin-work.component */ "./src/app/admin-work/admin-work.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_11__["MenuItemComponent"],
            _admin_work_admin_work_component__WEBPACK_IMPORTED_MODULE_14__["AdminWorkComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                { path: 'AdminWork', component: _admin_work_admin_work_component__WEBPACK_IMPORTED_MODULE_14__["AdminWorkComponent"] },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.css":
/*!***********************************************!*\
  !*** ./src/app/counter/counter.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.test {\r\n  padding: 20px;\r\n  text-align: left;\r\n  font-family: Haettenschweiler\r\n}\r\n\r\n\r\n\r\nh1.design {\r\n  text-align: center;\r\n  font-size: 25px;\r\n  font-family: 'Arial Rounded MT';\r\n  padding-top: 3px;\r\n \r\n}\r\n\r\n\r\n\r\n.textalign1 {\r\n}\r\n\r\n\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n\r\n\r\n.tabcolor {\r\n  color: #fa7f72;\r\n}\r\n\r\n\r\n\r\n.tabbutto:hover {\r\n  background-color: #fa7f72;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.buttoncolor {\r\n  border-color: #214252;\r\n  background-color: #214252;\r\n}\r\n\r\n\r\n\r\n.tab-close {\r\n  color: lightseagreen;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.button {\r\n  border: none;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n\r\n.example-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\n.center {\r\n  width: 1000px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCO0FBQ0Y7Ozs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGdCQUFnQjs7QUFFbEI7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7RUFDRSxtQkFBbUI7QUFDckI7Ozs7QUFJQTtFQUNFLGNBQWM7QUFDaEI7Ozs7QUFJQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7Ozs7QUFJQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7Ozs7QUFJQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7OztBQUlBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOzs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7OztBQUlBO0VBQ0UsV0FBVztBQUNiOzs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOzs7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAudGVzdCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBIYWV0dGVuc2Nod2VpbGVyXHJcbn1cclxuXHJcblxyXG5cclxuaDEuZGVzaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuIFxyXG59XHJcblxyXG5cclxuXHJcbi50ZXh0YWxpZ24xIHtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LXRhYi1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuXHJcblxyXG4udGFiY29sb3Ige1xyXG4gIGNvbG9yOiAjZmE3ZjcyO1xyXG59XHJcblxyXG5cclxuXHJcbi50YWJidXR0bzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhN2Y3MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1dHRvbmNvbG9yIHtcclxuICBib3JkZXItY29sb3I6ICMyMTQyNTI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDI1MjtcclxufVxyXG5cclxuXHJcblxyXG4udGFiLWNsb3NlIHtcclxuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./counter.component.css */ "./src/app/counter/counter.component.css")).default]
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/menu */ "./src/app/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor() {
        this.modulesList = _app_menu__WEBPACK_IMPORTED_MODULE_1__["ModulesList"];
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/menu-item/menu-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/menu-item/menu-item.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/menu-item/menu-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menu-item/menu-item.component.ts ***!
  \**************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MenuItemComponent = class MenuItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
MenuItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], MenuItemComponent.prototype, "items", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('childMenu', { static: true }),
    __metadata("design:type", Object)
], MenuItemComponent.prototype, "childMenu", void 0);
MenuItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-menu-item',
        template: __importDefault(__webpack_require__(/*! raw-loader!./menu-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-item/menu-item.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./menu-item.component.css */ "./src/app/menu-item/menu-item.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], MenuItemComponent);



/***/ }),

/***/ "./src/app/menu.ts":
/*!*************************!*\
  !*** ./src/app/menu.ts ***!
  \*************************/
/*! exports provided: ModulesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesList", function() { return ModulesList; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ModulesList = [{
        label: 'User',
        children: [{
                label: 'User 1',
                children: [{
                        label: 'User 5'
                    }, {
                        label: 'User 6'
                    }, {
                        label: 'User 7'
                    }]
            }, {
                label: 'User 2',
                children: [{
                        label: 'User 8'
                    }, {
                        label: 'User 9'
                    }, {
                        label: 'User 10'
                    }]
            }, {
                label: 'User 3'
            }, {
                label: 'User 4'
            }]
    }, {
        label: 'Management',
        children: [{
                label: 'Management 1',
                children: [{
                        label: 'Management 2'
                    }, {
                        label: 'Management 3'
                    }, {
                        label: 'Management 4'
                    }]
            }]
    }, {
        label: 'Admin',
        children: [{
                label: 'Admin 1'
            }, {
                label: 'Admin 2'
            }, {
                label: 'Admin 3'
            }, {
                label: 'Admin 4'
            }]
    }];


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\redesign\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map