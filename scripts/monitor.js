/**

 * System Monitoring Script - Production
 * Monitors application health and performance
 */
const ENV = process.env.NODE_ENV || 'production';
const monitorConfig = {
  production: {
      interval: 60000, // 1 minute
      alertThreshold: 80,
      metricsEndpoint: 'http://localhost:8080/metrics',
      debugMode: false
  },
  development:{
      interval: 5000, // 1 minute
      alertThreshold: 90,
      metricsEndpoint: 'http://localhost:3000/metrics',
      debugMode: true,
      verboseLogging: true
  }
};
const Config = monitorConfig[ENV];
console.log('=================================');
console.log(`DevOps Simulator - Monitor`);
console.log('=================================');
console.log(`Debug: ${Config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  
  if (Config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }
  
  // Check CPU usage
  const cpuUsage = Math.random() * 100;
  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  
  // Check Memory
  const memUsage = Math.random() * 100;
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  
  // Check Disk
  const diskUsage = Math.random() * 100;
  console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);
  
  // Development-specific checks
  if (Config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }
  
  // Status determination
  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > Config.alertThreshold) {
    console.log('⚠️  System Status: WARNING - High resource usage');
  } else {
    console.log('✅ System Status: HEALTHY');
  }
  
  if (Config.verboseLogging) {
    console.log(`Next check in ${Config.interval}ms`);
  }

}

// Start monitoring
console.log(`Monitoring every ${Config.interval}ms`);

setInterval(checkSystemHealth, Config.interval);

checkSystemHealth();


// Development-specific: Log memory usage
if (Config.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}

