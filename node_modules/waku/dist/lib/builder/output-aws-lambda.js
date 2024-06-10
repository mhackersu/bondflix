import path from 'node:path';
import { writeFileSync } from 'node:fs';
export const emitAwsLambdaOutput = async (config)=>{
    writeFileSync(path.join(config.distDir, 'package.json'), JSON.stringify({
        type: 'module'
    }, null, 2));
};
