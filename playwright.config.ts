import { PlaywrightTestConfig} from '@playwright/test';
import { testConfig } from './testConfig';

const config: PlaywrightTestConfig = {

    reporter: [   ['line'], ['allure-playwright'], [`html`,
            {
                outputFolder: 'html-report',
                open: 'never'
            }]],

  testMatch: ["AppTests/Login.test.ts"],
    use: {

        baseURL: "https://ecommerce-playground.lambdatest.io/",
        headless: false,
        screenshot: "only-on-failure",     
        video:"retain-on-failure"        
    },
    retries: 0,
    
  //timeout: 30000, 


};
export default config;