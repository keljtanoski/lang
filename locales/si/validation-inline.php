<?php

/*
|--------------------------------------------------------------------------
| Validation Language Lines
|--------------------------------------------------------------------------
|
| The following language lines contain the default error messages used by
| the validator class. Some of these rules have multiple versions such
| as the size rules. Feel free to tweak each of these messages here.
|
*/

return [
    'accepted'             => 'මේ ක්ෂේත්රයේ විය යුතුය පිළිගත්තා.',
    'accepted_if'          => 'This field must be accepted when :other is :value.',
    'active_url'           => 'මෙය වලංගු නැත URL එක.',
    'after'                => 'මෙම විය යුතුය දිනය පසු :date.',
    'after_or_equal'       => 'මෙම විය යුතුය දිනය පසු හෝ සමාන :date.',
    'alpha'                => 'මෙම ක්ෂේත්රය පමණක් විය හැක අඩංගු ලිපි.',
    'alpha_dash'           => 'මෙම ක්ෂේත්රය පමණක් විය හැක අඩංගු අකුරු, අංක, ඉතුරු සහ අවධාරනය.',
    'alpha_num'            => 'මෙම ක්ෂේත්රය පමණක් විය හැක අඩංගු ලිපි සහ අංක.',
    'array'                => 'මේ ක්ෂේත්රයේ විය යුතුය රැසක්.',
    'attached'             => 'මේ ක්ෂේත්රයේ මේ වන විටත් අමුණා ඇත.',
    'before'               => 'මෙම විය යුතුය දිනය පෙර :date.',
    'before_or_equal'      => 'මෙම විය යුතුය දිනය පෙර හෝ සමාන :date.',
    'between'              => [
        'array'   => 'This content must have between :min and :max items.',
        'file'    => 'This file must be between :min and :max kilobytes.',
        'numeric' => 'This value must be between :min and :max.',
        'string'  => 'This string must be between :min and :max characters.',
    ],
    'boolean'              => 'මේ ක්ෂේත්රයේ විය යුතුය, සැබෑ හෝ බොරු.',
    'confirmed'            => 'තහවුරු නොගැලපේ.',
    'current_password'     => 'The password is incorrect.',
    'date'                 => 'මෙම වලංගු වන දිනය.',
    'date_equals'          => 'මෙම විය යුතුය දිනය සමාන :date.',
    'date_format'          => 'මේ නොගැලපේ ආකෘතිය :format.',
    'different'            => 'මෙම අගය වෙනස් විය යුතුයි. ව :other සිට.',
    'digits'               => 'මෙම විය යුතුය :digits ඉලක්කම්.',
    'digits_between'       => 'මේ අතර විය යුතුයි :min හා :max ඉලක්කම්.',
    'dimensions'           => 'මෙම රූපය සාවද්ය මාන ඇත.',
    'distinct'             => 'මේ ක්ෂේත්රයේ ඇති duplicate වටිනාකම.',
    'email'                => 'මෙම විය යුතුය, වලංගු විද්යුත්-තැපැල් ලිපිනය.',
    'ends_with'            => 'මේ අවසන් විය යුතුය සමග එක් පහත සඳහන්: :values.',
    'exists'               => 'තෝරාගත් අගය සාවද්ය වේ.',
    'file'                 => 'අන්තර්ගත විය යුතුය ගොනුව.',
    'filled'               => 'මේ ක්ෂේත්රයේ ඇති කළ යුතු අගය.',
    'gt'                   => [
        'array'   => 'The content must have more than :value items.',
        'file'    => 'The file size must be greater than :value kilobytes.',
        'numeric' => 'The value must be greater than :value.',
        'string'  => 'The string must be greater than :value characters.',
    ],
    'gte'                  => [
        'array'   => 'The content must have :value items or more.',
        'file'    => 'The file size must be greater than or equal :value kilobytes.',
        'numeric' => 'The value must be greater than or equal :value.',
        'string'  => 'The string must be greater than or equal :value characters.',
    ],
    'image'                => 'මෙම විය යුතුය රූපයක්.',
    'in'                   => 'තෝරාගත් අගය සාවද්ය වේ.',
    'in_array'             => 'මෙම අගය නොපවතියි :other.',
    'integer'              => 'මෙම විය යුතුය, යනු පූර්ණ සංඛ්යාවකි.',
    'ip'                   => 'මෙම විය යුතුය වලංගු IP ලිපිනයක්.',
    'ipv4'                 => 'මෙම විය යුතුය වලංගු IPv4 ලිපිනය.',
    'ipv6'                 => 'මෙම විය යුතුය වලංගු IPv6 ලිපිනයක්.',
    'json'                 => 'මෙම විය යුතුය වලංගු JSON සංගීත.',
    'lt'                   => [
        'array'   => 'The content must have less than :value items.',
        'file'    => 'The file size must be less than :value kilobytes.',
        'numeric' => 'The value must be less than :value.',
        'string'  => 'The string must be less than :value characters.',
    ],
    'lte'                  => [
        'array'   => 'The content must not have more than :value items.',
        'file'    => 'The file size must be less than or equal :value kilobytes.',
        'numeric' => 'The value must be less than or equal :value.',
        'string'  => 'The string must be less than or equal :value characters.',
    ],
    'max'                  => [
        'array'   => 'The content may not have more than :max items.',
        'file'    => 'The file size may not be greater than :max kilobytes.',
        'numeric' => 'The value may not be greater than :max.',
        'string'  => 'The string may not be greater than :max characters.',
    ],
    'mimes'                => 'මෙම විය යුතුය ගොනු වර්ගය: :values.',
    'mimetypes'            => 'මෙම විය යුතුය ගොනු වර්ගය: :values.',
    'min'                  => [
        'array'   => 'The value must have at least :min items.',
        'file'    => 'The file size must be at least :min kilobytes.',
        'numeric' => 'The value must be at least :min.',
        'string'  => 'The string must be at least :min characters.',
    ],
    'multiple_of'          => 'වටිනාකම බහු විය යුතුය :value',
    'not_in'               => 'තෝරාගත් අගය සාවද්ය වේ.',
    'not_regex'            => 'මෙම ආකෘතිය සාවද්ය වේ.',
    'numeric'              => 'මෙම විය යුතුය සංඛ්යාව.',
    'password'             => 'මුරපදය වැරදිය.',
    'present'              => 'මෙම ක්ෂේත්රය සහභාගි විය යුතුය.',
    'prohibited'           => 'මේ ක්ෂේත්රයේ තහනම් කර තිබේ.',
    'prohibited_if'        => 'මේ ක්ෂේත්රයේ තහනම් කර තිබේ විට :other වේ :value.',
    'prohibited_unless'    => 'මේ ක්ෂේත්රයේ තහනම් කර තිබේ නම් :other වේ :values.',
    'regex'                => 'මෙම ආකෘතිය සාවද්ය වේ.',
    'relatable'            => 'මෙම ක්ෂේත්රය නොහැකි විය හැක, මෙම සමඟ සංෙයෝජිත ෙ කෙර් සම්පත්.',
    'required'             => 'මේ ක්ෂේත්රයේ අවශ්ය වේ.',
    'required_if'          => 'මේ ක්ෂේත්රයේ අවශ්ය විට :other වේ :value.',
    'required_unless'      => 'මේ ක්ෂේත්රයේ අවශ්ය නම් :other වේ :values.',
    'required_with'        => 'මේ ක්ෂේත්රයේ අවශ්ය විට :values වර්තමාන වේ.',
    'required_with_all'    => 'මේ ක්ෂේත්රයේ අවශ්ය විට :values වර්තමාන වේ.',
    'required_without'     => 'මේ ක්ෂේත්රයේ අවශ්ය විට :values වර්තමාන නොවේ.',
    'required_without_all' => 'මේ ක්ෂේත්රයේ අවශ්ය විට කිසිවක් :values වර්තමාන වේ.',
    'same'                 => 'වටිනාකම මෙම ක්ෂේත්රය යුතුය ගැලපෙන එකක් :other.',
    'size'                 => [
        'array'   => 'The content must contain :size items.',
        'file'    => 'The file size must be :size kilobytes.',
        'numeric' => 'The value must be :size.',
        'string'  => 'The string must be :size characters.',
    ],
    'starts_with'          => 'මේ සමඟ ආරම්භ විය යුතුය පහත සඳහන් එක්: :values.',
    'string'               => 'මේ යුතුය වැලක් විය.',
    'timezone'             => 'මෙම විය යුතුය වලංගු කලාපය.',
    'unique'               => 'මේ වන විටත් කටයුතු කර ඇත.',
    'uploaded'             => 'මෙම අසමත් උඩුගත කිරීමට.',
    'url'                  => 'මෙම ආකෘතිය සාවද්ය වේ.',
    'uuid'                 => 'මෙම විය යුතුය වලංගු UUID.',
    'custom'               => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],
    'attributes'           => [],
];
