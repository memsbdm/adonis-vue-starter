import { HealthChecks, DiskSpaceCheck, MemoryHeapCheck } from '@adonisjs/core/health';
import DatabaseCheck from '#core/health/database_check';

export const healthChecks = new HealthChecks().register([
	new DiskSpaceCheck(),
	new MemoryHeapCheck(),
	new DatabaseCheck(),
]);
