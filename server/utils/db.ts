/**
 * @Author: kun
 */

import { DBM } from '@/common/dbm';
import getLogger from './log4js';

const logger = getLogger('db.ts');

const orm = new DBM({
  connectionLimit: 10,
  host: 'www.calibur.pro',
  port: 3306,
  user: 'root',
  password: 'Mysql@123456',
  database: 'cloud_auto',
  isDebug: true,
});

orm.setLogger(logger as any);

export default orm;
