import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import legacy from 'loopback-datasource-juggler';

const config = {
  name: 'dsMantenimientos',
  connector: 'mongodb',
  url: 'mongodb+srv://Jojama:menaH01@clusterprogweb.t5zihue.mongodb.net/db_mantenimiento',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DsMantenimientosDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dsMantenimientos';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dsMantenimientos', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
