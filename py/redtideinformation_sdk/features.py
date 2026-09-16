# RedTideInformation SDK feature factory

from redtideinformation_sdk.feature.base_feature import RedTideInformationBaseFeature
from redtideinformation_sdk.feature.ratelimit_feature import RedTideInformationRatelimitFeature
from redtideinformation_sdk.feature.retry_feature import RedTideInformationRetryFeature
from redtideinformation_sdk.feature.test_feature import RedTideInformationTestFeature
from redtideinformation_sdk.feature.timeout_feature import RedTideInformationTimeoutFeature


_FEATURES = {
    "base": lambda: RedTideInformationBaseFeature(),
    "ratelimit": lambda: RedTideInformationRatelimitFeature(),
    "retry": lambda: RedTideInformationRetryFeature(),
    "test": lambda: RedTideInformationTestFeature(),
    "timeout": lambda: RedTideInformationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
