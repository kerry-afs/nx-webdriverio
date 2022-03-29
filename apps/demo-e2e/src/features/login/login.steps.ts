import { Given, Then, When } from '@wdio/cucumber-framework';
//import { someMethod } from '@testing';
import { someMethod } from '../../../../../libs/testing/src/index'
import LoginPage from '../../support/page-objects/login.page';
import SecurePage from '../../support/page-objects/secure.page';

const pages = {
  login: LoginPage,
};

Given(/^mobile-login: I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^mobile-login: I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^mobile-login: I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
