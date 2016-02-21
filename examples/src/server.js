import { createServer } from '@dr-kobros/react-broilerplate-server-express/lib/server';
import webpackConfig from '../webpack.config';

const config = {
    port: 8765
};

createServer(config, webpackConfig, app => {

});
