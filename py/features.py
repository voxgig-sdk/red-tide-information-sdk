# RedTideInformation SDK feature factory

from feature.base_feature import RedTideInformationBaseFeature
from feature.test_feature import RedTideInformationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RedTideInformationBaseFeature(),
        "test": lambda: RedTideInformationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
