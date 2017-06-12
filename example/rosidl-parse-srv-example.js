// Copyright (c) 2017 Intel Corporation. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const parser = require('../rosidl_parser/rosidl_parser.js');

const rosInstallPath = process.env.AMENT_PREFIX_PATH;
const packageName = 'std_srvs';
const packagePath = rosInstallPath + '/share/std_srvs/srv/SetBool.srv';

parser.parseServiceFile(packageName, packagePath).then((spec) => {
  console.log(`srv name: ${spec.srvName}`);
  console.log(`pkg name: ${spec.pkgName}`);

  console.log('srv request fields includes:');
  spec.request.fields.forEach((field) => {
    console.log(field);
  });

  console.log('srv response fields includes:');
  spec.response.fields.forEach((field) => {
    console.log(field);
  });
}).catch((e) => {
  console.log(e);
});
