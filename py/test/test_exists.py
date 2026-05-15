# ProjectName SDK exists test

import pytest
from redtideinformation_sdk import RedTideInformationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RedTideInformationSDK.test(None, None)
        assert testsdk is not None
